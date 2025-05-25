import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// const fs = require('fs');
// const path = require('path');
// const matter = require('gray-matter');


function scanDir(rootPath, rPath, nodeItem) {
    let thisPath = path.join(rootPath, rPath);
    let files = fs.readdirSync(thisPath);
    files.sort();
    for (let i = 0; i < files.length; i++) {
        let file = files[i];

        let temp = file.split('@')
        if (fs.statSync(path.join(thisPath, file)).isDirectory()) {//判断是否是目录
            if (file.indexOf('.') == 0) continue;
            if (file == 'images') continue;
            if (file == 'node_modules') continue;
            const item = {
                name: file,
                name2: temp[temp.length - 1],
                rPath: rPath,
                isDir: true,
                children: []
            }

            nodeItem.children.push(item)

            let nextRPath
            if (rPath != './') nextRPath = rPath + '/' + file
            else nextRPath = rPath + file
            nextRPath = nextRPath.replaceAll('\\', '/');

            scanDir(rootPath, nextRPath, item)
        }
        if (path.extname(file) != '.md') continue
        if (file == '_sidebar.md') continue;
        nodeItem.children.push({
            name: file,
            name2: path.parse(temp[temp.length - 1]).name,
            rPath: rPath,
            isDir: false,
            children: []
        })
    }
}


function countDir(nodeItem) {
    nodeItem.rPath = nodeItem.rPath.replaceAll('\\', '/');
    if (nodeItem.isDir) {
        nodeItem.subFileCount = 0;
        nodeItem.subDirCount = 0;
        for (let j = 0; j < nodeItem.children.length; j++) {
            const child = nodeItem.children[j];
            child.rPath = child.rPath.replaceAll('\\', '/');
            if (child.isDir) nodeItem.subDirCount++
            else nodeItem.subFileCount++
            countDir(child)
        }
    }
}
//参考 https://github.com/logicspark/vitepress-plugin-nested-sidebar/
//参考  sidebar-generator.ts->line 141
function getSubLinkFromFileName(rootPath, thisNode) {
    let subLink = []
    let filename = path.join(rootPath, thisNode.rPath, thisNode.name)
    const fileData = fs.readFileSync(filename, "utf-8");
    const { content } = matter(fileData);
    let contentArr = content.split("\n")
    let contentArr2 = contentArr.filter((item) => item.startsWith("## "))
    for (let i = 0; i < contentArr2.length; i++) {
        const item = contentArr2[i];
        // console.log('sublink item: ', item)
        let slicedText = item.slice(3).trim();
        // slicedText = slicedText.toLowerCase().replace(" ", "-");
        slicedText = slicedText.replace(" ", "-");
        subLink.push(slicedText)
    }

    return subLink;
}
function generateVitePressAnchor(title, slugMap) {
    const separator = '-';
    //vitepress\dist\node 18109 const slugify = (str) => str.normalize("NFKD").replace(rCombining, "").replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
    const rControl = /[\u0000-\u001f]/g;
    const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
    const rCombining = /[\u0300-\u036F]/g;
    let slug = title
        .normalize("NFKD")                // 1. Unicode规范化：分解重音字符
        .replace(rCombining, "")          // 2. 移除组合字符（如重音符号）
        .replace(rControl, "")            // 3. 移除控制字符
        .replace(rSpecial, "-")           // 4. 替换特殊字符为连字符
        .replace(/-{2,}/g, "-")           // 5. 合并连续的连字符
        .replace(/^-+|-+$/g, "")          // 6. 移除首尾的连字符
        .replace(/^(\d)/, "_$1")          // 7. 防止以数字开头（添加下划线前缀）
        .toLowerCase();
    

    // Step 2: 处理空锚点（如纯符号标题）
    if (!slug) return '';

    // Step 3: 重复标题编号逻辑
    if (!slugMap) return slug;

    const originalSlug = slug;
    let counter = 1;
    while (slugMap.has(slug)) {
        slug = `${originalSlug}-${counter++}`;
    }
    slugMap.set(originalSlug, (slugMap.get(originalSlug) || 0) + 1);
    return slug;
}
function _makeViteSidebarSub(rootPath, thisNode) {
    // console.log(thisNode)
    let rArray = []
    for (let j = 0; j < thisNode.children.length; j++) {
        const child = thisNode.children[j];
        let newItem = {}
        if (child.subFileCount == 1) {
            newItem = {
                "text": child.name2,
                "link": `${child.children[0].rPath.slice(1)}/${child.children[0].name}`
            }
            let subLink = getSubLinkFromFileName(rootPath, child.children[0])
            if (subLink.length > 0) {
                newItem.collapsed = true
                newItem['items'] = []
                let slugMap = new Map();
                for (let i = 0; i < subLink.length; i++) {
                    let subLinkItem = {
                        text: subLink[i],
                        link: newItem.link + '#' + generateVitePressAnchor(subLink[i], slugMap)
                    }
                    newItem['items'].push(subLinkItem)
                }
            }
        } else {
            if (child.isDir) {
                newItem = {
                    "text": child.name2,
                    "collapsed": true,
                    "items": _makeViteSidebarSub(rootPath, child)
                }
            } else {
                newItem = {
                    "text": child.name2,
                    "link": child.rPath.slice(1) + '/' + child.name
                }
                let subLink = getSubLinkFromFileName(rootPath, child)
                if (subLink.length > 0) {
                    newItem.collapsed = true
                    newItem['items'] = []
                    let slugMap = new Map();
                    for (let i = 0; i < subLink.length; i++) {
                        let subLinkItem = {
                            text: subLink[i],
                            link: newItem.link + '#' + generateVitePressAnchor(subLink[i], slugMap)
                        }
                        newItem['items'].push(subLinkItem)
                    }
                }

            }
        }
        rArray.push(newItem)
    }
    return rArray
}

function makeViteSidebar(rootPath) {
    const rootItem = { name: path.basename(rootPath), rPath: rootPath, isDir: true, children: [] }
    const rootArray = [rootItem]
    let rPath = './'
    scanDir(rootPath, rPath, rootItem)
    countDir(rootItem)
    let viteSidebar = []

    for (let i = 0; i < rootArray[0].children.length; i++) {
        const item = rootArray[0].children[i];
        if (!item.isDir) continue

        let newItem = {
            "text": item.name2,
            "collapsed": true,
            "items": _makeViteSidebarSub(rootPath, item)
        }
        viteSidebar.push(newItem)
    }
    //     let outStr = `
    // let vitePressSidebar = ${JSON.stringify(viteSidebar, null, 4)}
    // export function ymSidebar() {
    //     return vitePressSidebar;
    // };
    //     `;
    //     let fname = path.join(__dirname, 'vite_sidebar.js')
    //     fs.writeFileSync(fname, outStr, 'utf-8');
    //     console.log('save file:' + fname)
    return viteSidebar;
}

// let a = makeViteSidebar(path.join(__dirname, '../'))
// console.log(a)

export function ymSidebar(docDir) {
    // let rootPath = path.join(__dirname, docDir).replaceAll('\\', '/'); // 项目根目录
    return makeViteSidebar(docDir);
};
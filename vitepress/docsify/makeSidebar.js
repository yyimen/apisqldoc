const fs = require('fs');
const path = require('path');


function scanDir(rPath, nodeItem) {
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
            if (file == 'public') continue;
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

            scanDir(nextRPath, item)
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
function levelStr(level) {
    let s = ''
    for (let i = 0; i < level; i++)         s += '  '
    return s
}

function _makeSidebar(thisNode, level) {
    let result = '';
    for (let j = 0; j < thisNode.children.length; j++) {
        const child = thisNode.children[j];

        if (child.subFileCount == 1) {
            result += levelStr(level) + `- [${child.name2}](${child.children[0].rPath}/${child.children[0].name})\n`
        } else {
            if (child.isDir) {
                result += levelStr(level) + '- ' + child.name2 + '\n'
                result += _makeSidebar(child, level + 1)
            }
            else {
                result += levelStr(level) + `- [${child.name2}](${child.rPath}/${child.name})\n`
            }
        }
    }
    return result
}

function makeSidebar(rootPath) {
    const rootItem = { name: path.basename(rootPath), rPath: rootPath, isDir: true, children: [] }
    const rootArray = [rootItem]
    //let rPath = './'
    let rPath = ''
    scanDir(rPath, rootItem)
    countDir(rootItem)
    // console.log(rootArray)
    // console.log(JSON.stringify(rootArray, null, 2))
    let sideBarMd = '';
    let level = 0;
    let thisNode = rootArray;

    for (let i = 0; i < thisNode.length; i++) {
        const item = thisNode[i];
        sideBarMd += _makeSidebar(item, level)

        // console.log(sideBarMd)
    }
    // console.log(sideBarMd)

    fs.writeFileSync(path.join(rootPath, '_sidebar.md'), sideBarMd, 'utf-8');
    console.log('makeSidebar done fname:',path.join(rootPath, '_sidebar.md'))
}
let rootPath = path.join(__dirname, '../book').replaceAll('\\', '/'); // 项目根目录
makeSidebar(rootPath)

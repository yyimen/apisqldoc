const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');

function fmtDateStr(date) {
    const year = date.getFullYear().toString().slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // 通过 slice(-2) 截取后两位[3,4](@ref)
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}${month}${day}`;
}


function parseSemVer(version) {
    const regex = /^v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-.]+))?(?:\+([0-9A-Za-z-.]+))?$/;
    const match = version.match(regex);
    if (!match) return null;
    const [, major, minor, patch, prerelease, build] = match;
    return {
        major: parseInt(major),
        minor: parseInt(minor),
        patch: parseInt(patch),
        prerelease: prerelease,//prerelease ? prerelease.split('.') : [],
        // build: build ? build.split('.') : []
    };
}

function newSemVer(oldVersion) {
    let verInfo = parseSemVer(oldVersion)
    verInfo.patch++
    return `${verInfo.major}.${verInfo.minor}.${verInfo.patch}-B${fmtDateStr(new Date())}`
}
let newVersion = newSemVer(pkg.version);
pkg.version = newVersion
fs.writeFileSync(path.join(__dirname, 'package.json'), JSON.stringify(pkg, null, 2));
// console.log(newVersion)

const { execSync } = require('child_process');
// execSync(`npm version ${versionType} -m "Bump version to %s [skip ci]"`);
try {
    let cmds = [
        `git add .`,
        `git commit -m "Release v${newVersion}"`,
        `git tag -f v${newVersion} -m "Release v${newVersion}"`,
        `git push -f origin v${newVersion} `,
        `git push -f origin`,
    ]
    for (let cmd of cmds) {
        console.log(cmd)
        let ret = execSync(cmd);
        console.log(ret.toString())
    }
    console.log(`Tag v${newVersion} pushed successfully.`);
} catch (error) {
    console.error(`Error pushing tag: ${error.message}`);
    process.exit(1);
}
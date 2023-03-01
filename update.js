const fs = require('fs');

var packagejson = require('./lens/packages/open-lens/package.json');

// // name seems to serve as identifier
// packagejson.name = `open-lens-srokap`;

// To have easier time indicating the version installed
packagejson.productName = `OpenLens-Srokap`;

packagejson.build.publish = [{
    url: "https://github.com/Srokap/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens-Srokap.Setup.${version}.${ext}";

if (process.platform != "win32") {
    // build both x86_64 and arm64 for Linux and Darwin
    packagejson.scripts['build:app'] = "electron-builder --publish onTag --x64 --arm64";
}

fs.writeFileSync('./lens/packages/open-lens/package.json', JSON.stringify(packagejson));

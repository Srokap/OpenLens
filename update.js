const fs = require('fs');

var packagejson = require('./package.json');

// name seems to serve as identifier
packagejson.name = `open-lens-srokap`;

// To have easier time indicating the version installed
packagejson.productName = `OpenLens-Srokap`;

packagejson.build.publish = [{
    url: "https://github.com/Srokap/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens-Srokap.Setup.${version}.${ext}";

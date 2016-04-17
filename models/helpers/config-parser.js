'use strict';
 
var yaml = require('yamljs');
var path = require('path');
//var json2html = require('node-json2html');
//var fs = require('fs');

module.exports = function (yamlFile,type) {
    console.log('Loading YAML file ' + yamlFile);
    var yamlContent = yaml.load(yamlFile);
    // TODO: Handle parse error
    if (yamlContent == null) {
        yamlContent = {};
    }
    yamlContent.fileContent = JSON.stringify(yamlContent);
    if (!yamlContent.hasOwnProperty('name')) {
        yamlContent.name = path.parse(yamlFile).name;
    }
    if (!yamlContent.hasOwnProperty('status')) {
        yamlContent.status = 'N/A';
    }

    yamlContent.__path = yamlFile;
    yamlContent.__type = type;
    var color = 'gray';
    switch (yamlContent.status) {
        case 'failed':
            color = 'red';
            break;
        case 'in-progress':
            color = 'orange'
            break;
        case 'complete':
            color = 'green';
            break;
        default:
            color = 'grey';
    }
    yamlContent.color = color;

    /*var transform = {
    'tag': 'li',
    'html':
    'Status ${status}'
    };
    yamlContent.fileContent = json2html.transform(yamlContent, transform);
    console.log(yamlContent.fileContent);
    //yamlContent.fileContent = fs.readFileSync(yamlFile);*/
    return yamlContent;
};

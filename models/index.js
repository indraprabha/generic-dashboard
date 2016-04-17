'use strict';
var fs = require('fs');
var config_parser = require('./helpers/config-parser');
var run_command = require('./helpers/run-command');
var nconf = require('nconf');
nconf.file('./config/config.json');
var output = "";

function configCollector(type) {
    var configDir = nconf.get('appConfig:'+type+'ConfigDir');
    console.log(type+' config files to be picked from ' + configDir);
    fs.realpath(configDir, function (err, path) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Path is : ' + path);
    });

    var config = [];
    fs.readdir(configDir, function (err, files) {
        if (err) return;
        files.forEach(function (f) {
            // TODO: Actual config file build cmd needs to replace ipconfig, 
            // cb_end should log status of that command
            output = new run_command('ipconfig', ['/all'], 
              function (me, data) {me.stdout += data.toString();}, //cb_stdout
              function () { console.log('Output here: '+output.stdout)} // cb_end
            );

            // TODO: Following snippet move into cb_end of run_command.
            var yamlContent = config_parser(configDir + '/' + f, type);
            yamlContent.id = type + '_' + f.replace('.yaml', '');
            console.log("Parsed YAML content from file " + yamlContent.__path + ": " + JSON.stringify(yamlContent));
            config.push(yamlContent);
        });
    });
    return config;
}

module.exports = function IndexModel() {
    return {
        'env': configCollector('env'), 
        'build': configCollector('build')
    }
};

'use strict';

var IndexModel = require('../models/index');
var config_parser = require('../models/helpers/config-parser');

module.exports = function (router) {

    //Route fetch all configs
    router.get('/', function (req, res) {
        var model = new IndexModel();
        res.render('index', model);
    });

    // Route to fetch single config info
    router.post('/', function (req, res) {
        console.log(req.body);
        if (req.body.config_path) {
            var yamlContent = config_parser(req.body.config_path,req.body.config_type);
            res.send(yamlContent);
        } else {
            res.send({});
        }
    });


};

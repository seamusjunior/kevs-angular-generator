const chalk = require('chalk');
const settings = require('../settings');
const _ = require('lodash');
var fs = require('fs');

let Process = function (data, currentsrcPath, currentDestPath, runner, feature) {

  var files = fs.readdirSync(currentsrcPath);

  for (var f in files) {
    let src = currentsrcPath + files[f];    
    let des = currentDestPath + files[f];

    runner.fs.copyTpl(src, des,  {data: data    });  
  }
}

let processFeatureTemplate = function (feature, currentDestPath, items) {

  console.log('featurexxx = ' + feature);

}

let copyTplsWithDataFeature = function (runner, source, dest, data, features, sub) {
 

  for (var feature in features) {
    data.featureName = feature,
    data.featureNameCC = _.camelCase(feature)
    var destpath = dest + '/' + feature + '/' + sub + '/';

    console.log('destpath = ' + destpath);

    Process(data, runner.templatePath(source), destpath, runner, feature);
  }

}


module.exports.copyTplsWithDataFeature = copyTplsWithDataFeature;
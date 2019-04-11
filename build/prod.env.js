'use strict'
const { execSync } = require('child_process');
const md5 = require('md5');
const staticVersion = (execSync('git symbolic-ref --short -q HEAD', {})).toString().replace('\n', '');
module.exports = {
    PROJECT_NAME: "vue-h5-demo",
    OUT_PATH: md5(staticVersion)
}
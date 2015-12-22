require('shelljs/global');
var dirs = require('./dirs');

require('./core-js-custom-build');

require('./runWebpackConfigs')('dev', function(err) {
  if (err) throw err;
  cd(dirs.meteor);
  exec('meteor --settings ../settings/devel.json', {async: true});
});

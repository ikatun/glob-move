'use strict';

const glob = require('glob-promise');
const { join, basename } = require('path');
const promisify = require('es6-promisify');
const mv = promisify(require('mv'));

module.exports = function(srcPattern, destDir, globOptions) {
  let copiedPaths = null;

  return glob(srcPattern, globOptions)
    .then(paths => paths.map(path => {
      copiedPaths = paths;
      return mv(path, path.join(destDir, basename(path)), { mkdirp: true });
    }))
    .then(p => Promise.all(p))
    .then(() => copiedPaths);
}

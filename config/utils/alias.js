const path = require('path');

const defaultPath = path.resolve(__dirname, '../../src');

const paths = {
  '@components': path.resolve(defaultPath, 'components')  ,
  '@consts': path.resolve(defaultPath, 'consts'),
  '@services': path.resolve(defaultPath, 'services'),
  '@store': path.resolve(defaultPath, 'store'),
  '@types': path.resolve(defaultPath, 'types'),
  '@utils': path.resolve(defaultPath, 'utils')
};

module.exports = paths;

const path = require('path');

const defaultPath = path.resolve(__dirname, '../../src');

const paths = {
  '@components': path.resolve(defaultPath, 'components')  ,
  '@consts': path.resolve(defaultPath, 'consts'),
  '@contexts': path.resolve(defaultPath, 'contexts'),
  '@services': path.resolve(defaultPath, 'services'),
  '@stores': path.resolve(defaultPath, 'stores'),
  '@types': path.resolve(defaultPath, 'types'),
  '@utils': path.resolve(defaultPath, 'utils')
};

module.exports = paths;

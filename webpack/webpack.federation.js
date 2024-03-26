const { dependencies } = require('../package.json');

const federationConfig = ({APP1}) => {
  return {
    name: 'counter',
    filename: 'remoteEntry.js',
    exposes: {
      './Counter': './src/Counter.tsx'
    },
    remotes:{
      sharedComponent: `sharedComponent@${APP1}/remoteEntry.js`
    },
    shared: {
      ...dependencies,
      react: {
        eager: true,
        singleton: true,
        requiredVersion: dependencies['react'],
      },
      'react-dom': {
        eager: true,
        singleton: true,
        requiredVersion: dependencies['react-dom'],
      },
      'react-redux': {
        eager: true,
        singleton: true,
        requiredVersion: dependencies['react-redux'],
      },
      '@reduxjs/toolkit': {
        eager: true,
        singleton: true,
        requiredVersion: dependencies['@reduxjs/toolkit'],
      },
    }
  };
};

module.exports = federationConfig;
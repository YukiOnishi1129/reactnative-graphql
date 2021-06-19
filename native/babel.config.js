module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo'],
      ['react-native-reanimated/plugin'],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@Component': './src/components',
            '@Screen': './src/screens',
            '@Route': './src/routes',
            '@Type': './src/types',
            '@Context': './src/contexts',
            '@Storage': './src/storages',
            '@Constants': './src/constants',
            '@GraphQL': './src/graphql',
          },
        },
      ],
    ],
  };
};

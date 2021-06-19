module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@Component': './src/components',
            '@Screen': './src/screens',
            '@Route': './src/routes',
            '@Type': './src/types',
            '@Hook': './src/hooks',
            '@Logic': './src/logics',
            '@Context': './src/contexts',
            '@Storage': './src/storages',
            '@Constant': './src/constants',
            '@Style': './src/styles',
            '@GraphQL': './src/graphql',
          },
        },
      ],
    ],
  };
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./App'],
          alias: {
            '@components': './src/components',
            '@navigation': './src/navigation',
            '@views': './src/views',
            '@store': './src/store',
            '@models': './src/models',
            '@networking': './src/networking',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
        },
      ],
    ],
  };
};

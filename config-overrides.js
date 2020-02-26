const {override, fixBabelImports} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);

// /* config-overrides.js */
// const { injectBabelPlugin } = require('react-app-rewired');
// const rewireLess = require('react-app-rewire-less');
//
// module.exports = function override(config, env) {
//    config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
//    config = rewireLess.withLoaderOptions({
//      modifyVars: { "@primary-color": "#1DA57A" },
//    })(config, env);
//     return config;
// };
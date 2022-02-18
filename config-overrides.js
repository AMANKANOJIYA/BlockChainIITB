const { ProvidePlugin } = require('webpack');

module.exports = function (config, env) {
    return {
        ...config,
        module: {
            ...config.module,
            rules: [
                ...config.module.rules,
                {
                    test: /\.(m?js|ts)$/,
                    enforce: 'pre',
                    use: ['source-map-loader'],
                },
            ],
        },
        plugins: [
            ...config.plugins,
            new ProvidePlugin({
                process: 'process/browser',
            }),
            new ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
            }),
        ],
        resolve: {
            ...config.resolve,
            fallback: {
                assert: require.resolve('assert'),
                buffer: require.resolve('buffer'),
                stream: require.resolve('stream-browserify'),
                https: require.resolve('https-browserify'),
                crypto: require.resolve('crypto-browserify'),
                os: require.resolve('os-browserify'),
                http: require.resolve('stream-http'),
                buffer: require.resolve('buffer/'),
                console:require.resolve('console-browserify')
            },
        },
        ignoreWarnings: [/Failed to parse source map/],
    };
};
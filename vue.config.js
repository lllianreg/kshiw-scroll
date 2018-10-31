const path = require('path')

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/kshiw-scroll/'
        : '/',
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    devServer: {
        port: '8060'
    }
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/less/imports.less'),
            ],
        })
}
module.exports = {
    publicPath: '/component-gallery/',
    outputDir: 'component-gallery',
    chainWebpack: config => {
        config.module
        .rule('raw')
        .test(/\.txt$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end()
    },
    runtimeCompiler: true
}
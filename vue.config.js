const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '//localhost:7101/',
  devServer: {
    port: 7101,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: 'userApp',
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_userApp`, // 注释或删除这一行
      chunkLoadingGlobal: 'webpackChunk_userApp', // 新写法，名称可自定义
    },
  },
})

/**
 * 框架配置文件, 与框架工程有关的配置都统一在该文件配置
 *
 * @author chenhuachun@xdh.net.cn
 *
 */
module.exports = {
  /**
   * 部署应用时的基本 URL, VueCli v3.3 改名为 publicPath
   */
  baseUrl: '/xdh-form-builder/',
  
  /**
   * 生成的生产环境构建文件的目录
   */
  outputDir: 'dist',
  
  /**
   * 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
   */
  assetsDir: '',
  
  /**
   * 开发环境端口号
   */
  devServerPort: 8000,
  
  /**
   * 默认主题编译后输出路径，根目录在public下面
   */
  themeOutputDir: 'lib/theme/',
  
  /**
   * 强制 eslint-loader 将 lint 错误输出为编译错误
   */
  lintOnSave: 'error',
  
  /**
   * 扩展的静态资源目录，只对主站有效
   */
  extendContentBase: [],
  
  /**
   * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器
   */
  proxy: null,
  
  /**
   * 文档服务端口号（开发模式）
   */
  docsServerPort: 7001,
  
  /**
   * 文档发布目录
   */
  docsOutputDir: 'dist_docs',
  
  /**
   * docs 部署目录
   */
  docsBaseUrl: '/xdh-web-doc/',
  
  /**
   * dist 预览服务器端口
   */
  previewServerPort: 7002,
  
  /**
   * 文档预览服务器端口（产品模式）
   */
  docsPreviewServerPort: 7003,
  
  /**
   * apps 配置文件存放目录路径
   */
  appsConfigDir: 'config/apps',
  
  /**
   * apps存放目录
   */
  appsDir: 'apps',
  
  /**
   * 生产环境打包dll
   */
  dll: ['vue', 'vue-router', 'vuex', 'axios', 'path-to-regexp', 'element-ui', 'nprogress'],
  
  /**
   * 预先加载编译好的主题
   */
  preloadTheme: true,
  
  /**
   * node_modules 仓库
   */
  install: {
    /**
     * 仓库类型，支持 git 和 svn
     */
    type: 'git',
    
    /**
     * 分支名称，仅对git有效
     */
    branch: 'master',
    
    /**
     * 仓库地址
     */
    repository: 'https://gitee.com/newgateway/node_modules.git'
  },
  
  /**
   * 升级框架源仓库
   */
  upgrade: {
    /**
     * 仓库类型，支持 git 和 svn
     */
    type: 'git',
    
    /**
     * 分支名称，仅对git有效
     */
    branch: 'v3.x',
    
    /**
     * 仓库地址
     */
    repository: 'https://gitee.com/newgateway/xdh-web.git',
    /**
     * 临时文件夹名称
     */
    tempDir: '._temp',
    /**
     * 升级过程不需要替换的文件路径
     */
    exclude: [
      '/src/assets',
      '/src/base',
      '/src/components',
      '/src/helper',
      '/src/mapping',
      '/src/mock',
      '/src/router',
      '/src/store',
      '/src/style/variables/_custom.scss',
      '/src/views',
      '/src/config.js',
      '/src/main.js',
      '/src/App.vue',
      '/config/index.js',
      '/test/',
      '/coder/schemas',
      '/coder/config.js',
      '/release/',
      '/public/'
    ]
  }
  
}

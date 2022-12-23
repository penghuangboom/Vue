import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// mock
// import { viteMockServe } from 'vite-plugin-mock'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    // 插件
    plugins: [
      vue(),
      styleImport({
        resolves: [VantResolve()]
      }),
      Components({
        resolvers: [VantResolver()]
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        // 设置为在'src/'目录下生成解决ts报错，默认是当前目录('./'，即根目录)
        dts: 'src/auto-import.d.ts',
        // 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
        // 'vue-global-api'这个插件仅仅解决vue3 hook报错
        eslintrc: {
          enabled: true
        }
      })
      // viteVConsole({
      //   entry: pathResolve('src/main.ts'),
      //   localEnabled: true,
      //   enabled: env.VITE_BUILD_VCONSOLE === 'true',
      //   config: {
      //     maxLogNumber: 1000,
      //     theme: 'dark'
      //   }
      // })
      // mock 数据的 dev环境
      // viteMockServe({
      //   // supportTs: true, // 是否开启支持ts
      //   mockPath: 'mock', // 设置mockPath为根目录下的mock目录
      //   localEnabled: command === 'serve', // 设置是否监视mockPath对应的文件夹内文件中的更改
      //   logger: true //是否在控制台显示请求日志
      // })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') //resolve('./src')
      }
    },
    // 配置公共样式文件
    // vite.config.ts
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${resolve(__dirname, 'src/styles/index.less')}";`
        }
      }
    },
    base: './', // 打包路径
    server: {
      port: 8888, // 服务端口号
      open: true, // 服务启动时是否自动打开浏览器
      cors: true // 允许跨域
    }
  }
})

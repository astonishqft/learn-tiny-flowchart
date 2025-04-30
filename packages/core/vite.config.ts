import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [dts()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    sourcemap: 'inline',
    lib: {
      entry: resolve(__dirname, './src/index.ts'), // 编译文件的入口
      formats: ['es'], // 输出的产物格式为 ES 模块（ES Module）
      fileName: 'index' // 输出的文件名
    }
  }
})

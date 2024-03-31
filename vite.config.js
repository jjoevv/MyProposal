import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MyProposal/hntv/",
  plugins: [react()],
  build: {
    outDir: 'dist', // Thay đổi tên thư mục xuất ra theo nhu cầu của bạn
  },
})

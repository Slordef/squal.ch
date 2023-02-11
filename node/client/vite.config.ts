import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
			}
		}
	},
	resolve: {
		alias: {
			'@': '/src',
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '',
			}
		}
	}
});

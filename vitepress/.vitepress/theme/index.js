import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import imageViewer from "vitepress-plugin-image-viewer";
import "viewerjs/dist/viewer.min.css";
import "./style/var.css";


export default {
    ...DefaultTheme,

    setup() {
        const route = useRoute();// 获取路由
        imageViewer(route);// 使用插件
    },
    NotFound: () => "404", // <- this is a Vue 3 functional component
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
    },
}



// https://blog.csdn.net/qq_30678861/article/details/133803782
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import imageViewer from "vitepress-plugin-image-viewer";
import "viewerjs/dist/viewer.min.css";
import "./style/var.css";
// import Layout from "./Layout.vue";


export default {
    ...DefaultTheme,
    //  Layout,
    setup() {
        // 获取路由
        const route = useRoute();
        // console.log(route.path)
        // 使用
        imageViewer(route);
    },
    NotFound: () => "404", // <- this is a Vue 3 functional component
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
    },
}

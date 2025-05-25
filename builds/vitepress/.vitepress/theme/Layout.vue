<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import VitepressPluginNestedSidebar from "vitepress-plugin-nested-sidebar";
import { onMounted, onUnmounted, computed, watch } from "vue";
import { useData, useRoute } from "vitepress";

const { Layout } = DefaultTheme;
const { utility } = VitepressPluginNestedSidebar();
const {
  calculateAndHighlightHeader,
  resetHeader,
  filterSidebar,
  checkMultipleSidebar,
} = utility;
const { theme, site, page } = useData();
const route = useRoute();

const calculateAndHighlightHeaderObj = computed(() => {
  return {
    adjustOffsetTop: +site.value.scrollOffset,
  };
});

const sidebar = computed(() => {
    
  const file = page.value.relativePath.split("/");
console.log("file:", file)
  const isMultipleSidebar = checkMultipleSidebar(theme.value.sidebar);

  if (isMultipleSidebar) {
    if (file.length > 1) {
        console.log('return 1:',theme.value.sidebar[`/${file[0]}/`].filter(filterSidebar(route.path) )[0])
      return theme.value.sidebar[`/${file[0]}/`].filter(filterSidebar(route.path) )[0];
    }
    console.log('return 2:',theme.value.sidebar[`/`].filter(filterSidebar(route.path))[0])
    return theme.value.sidebar[`/`].filter(filterSidebar(route.path))[0];
  }
  console.log('route.path:', route.path)
  console.log('filterSidebar:', filterSidebar(route.path))
  console.log('return 3:', theme.value.sidebar.filter(filterSidebar(route.path))[0])
  console.log('return 4:', theme.value.sidebar)
  
  return theme.value.sidebar.filter(filterSidebar(route.path))[0];
});

onMounted(() => {
  window.addEventListener("scroll", () => {
    calculateAndHighlightHeader(
      sidebar.value,
      calculateAndHighlightHeaderObj.value
    );
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {
    calculateAndHighlightHeader(
      sidebar.value,
      calculateAndHighlightHeaderObj.value
    );
  });
});

watch(
  () => route.path,
  () => {
    resetHeader();
    calculateAndHighlightHeader(
      sidebar.value,
      calculateAndHighlightHeaderObj.value
    );
  },
  { deep: true }
);
</script>

<template>
  <Layout>
    <Content />
  </Layout>
</template>

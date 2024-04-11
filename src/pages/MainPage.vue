<template>
    <component :is="pageComponent" />
</template>

<script>
import MainPageDesktop from '@/components/desktop/pages/MainPageDesktop.vue';

export default {
    components: { MainPageDesktop },
    setup() {
        return {
            pageComponent: window.matchMedia('(min-width: 1024px)').matches ? 'MainPageDesktop' : 'MainPageMobile',
        }
    },
};
</script>

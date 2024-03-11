<template>
    <component :is="layoutComponent">
        <component :is="pageComponent" />
    </component>
</template>

<script>
import LayoutDesktop from '@/layouts/LayoutDesktop.vue';
import MainPageDesktop from '@/components/desktop/MainPageDesktop.vue';

export default {
    components: { MainPageDesktop, LayoutDesktop },
    setup() {
        return {
            layoutComponent: window.matchMedia('(min-width: 1024px)').matches ? 'LayoutDesktop' : '',
            pageComponent: window.matchMedia('(min-width: 1024px)').matches ? 'MainPageDesktop' : '',
        }
    },
};
</script>

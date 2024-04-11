<template>
    <component :is="layoutComponent">
        <RouterView/>
    </component>
</template>

<script>
import LayoutDesktop from '@/layouts/LayoutDesktop.vue';

export default {
    components: { LayoutDesktop },
    setup() {
        return {
            layoutComponent: window.matchMedia('(min-width: 1024px)').matches ? 'LayoutDesktop' : 'LayoutMobile',
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/base";
</style>

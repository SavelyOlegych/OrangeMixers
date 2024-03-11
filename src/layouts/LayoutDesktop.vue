<template>
    <HeaderDesktop/>
    <slot/>
    <FooterDesktop/>
</template>

<script>
import HeaderDesktop from '@/components/desktop/header/HeaderDesktop.vue';
import FooterDesktop from '@/components/desktop/footer/FooterDesktop.vue';

export default {
    components: { FooterDesktop, HeaderDesktop }
};
</script>

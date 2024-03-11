<template>
    <div class="products-list">
        <ProductDesktop class="products-list__item--columns-4"/>
        <ProductDesktop class="products-list__item--columns-4"/>
        <ProductDesktop class="products-list__item--columns-4"/>
        <ProductDesktop class="products-list__item--columns-4"/>
    </div>
</template>

<script>
import ProductDesktop from '@/components/desktop/global/ProductDesktop.vue';

export default {
    components: { ProductDesktop }
}
</script>

<style lang="scss" scoped>
.products-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    &--catalog {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>

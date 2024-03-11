<template>
    <section class="main-page__promo container">
        <h2 class="main-page__promo-title">
            Акционные товары
        </h2>
        <ProductsListDesktop/>
    </section>
</template>

<script>
import ProductsListDesktop from '@/components/desktop/global/ProductsListDesktop.vue';

export default {
    components: { ProductsListDesktop }
}
</script>

<style lang="scss" scoped>
.main-page__promo {
    margin-bottom: 80px;

    &-title {
        font-size: 32px;
        font-weight: 400;
        line-height: 36px;
        margin-bottom: 20px;
    }
}
</style>

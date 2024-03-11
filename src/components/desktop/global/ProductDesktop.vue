<template>
    <div class="products-list__item">
        <div class="products-list__item-discount">
            -15%
        </div>
        <img src="" alt="" class="products-list__item-img">
        <div class="products-list__item-title">
            O-mebel зеркальный шкаф со светом Лотос
        </div>
        <div class="products-list__item-prices">
            <div class="products-list__item-price">
                5 990 ₽
            </div>
            <div class="products-list__item-old-price">
                6 499 ₽
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.products-list__item {
    height: 354px;
    border-right: 1px solid #ECECEC;
    border-bottom: 1px solid #ECECEC;
    position: relative;
    padding: 24px 20px;

    &.products-list__item--columns-4 {
        @include productBorders(4);
    }

    &.products-list__item--columns-3 {
        @include productBorders(3);
    }

    &-discount {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 60px;
        height: 36px;
        border-radius: 2px;
        background-color: $orangeColor;
        color: white;
        font-weight: 700;
        text-align: center;
        padding-top: 8px;
    }

    &-img {
        width: 180px;
        height: 188px;
        margin-bottom: 20px;
    }

    &-title {
        line-height: 22px;
        margin-bottom: 34px;
    }

    &-prices {
        display: flex;
    }

    &-price {
        font-size: 20px;
        font-weight: 700;
        color: #151716;
    }

    &-old-price {
        margin-left: 9px;
        color: #A5A5A5;
        text-decoration: line-through;
    }
}
</style>

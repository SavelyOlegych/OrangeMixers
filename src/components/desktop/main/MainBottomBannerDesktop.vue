<template>
    <section class="main-page__bottom-banner">
        <img class="main-page__bottom-banner-img" src="../../../assets/images/main-bottom-banner.png" alt="banner">
        <div class="main-page__bottom-banner-text">
            ORANGE – это строгий, тщательно продуманный дизайн и подлинные немецкие традиции.
        </div>
    </section>
</template>

<style lang="scss" scoped>
.main-page__bottom-banner {
    width: 100%;
    position: relative;

    &-img {
        width: 100%;
    }

    &-text {
        @include displayFlex(center, center);
        @include orenburgcRegular;
        font-size: 28px;
        line-height: 36px;
        color: $whiteColor;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%);
        height: 161px;
        background-color: #F6761A;
        width: 1200px;
        padding: 0 218px;
        text-align: center;

        @media (max-width: 1440px) {
            width: 83.33%;
            padding: 0 18.17%;
        }
    }
}
</style>

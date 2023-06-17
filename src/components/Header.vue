<template>
    <header class="header">
        <div class="header__wrapper" :class="{'header__wrapper--main-page': isMainPage}">
            <div class="header__group">
                <a class="header__logo-link" href="/">
                    <img class="header__logo" src="@/assets/svg/logo.svg" alt="logo" width="126" height="35">
                </a>
                <div class="header__text" v-if="isMainPage">
                    Разработано в Германии. Сделано в России.
                </div>
                <HeaderMenu v-else/>
            </div>
            <div class="header__group">
                <div class="header__phone">
                    <img class="header__phone-icon" src="@/assets/svg/phone-icon.svg" alt="phone icon">
                    <a class="header__phone-text" href="tel:+79999999999">+7 (999) 999 99 99</a>
                </div>
                <HeaderButton @click="isHeaderSearchVisible = !isHeaderSearchVisible">
                    <img class="header__search-icon" src="@/assets/svg/search-icon.svg" alt="search icon" width="20"
                         height="20">
                </HeaderButton>
            </div>
        </div>
    </header>
    <PopupBackground v-model:show="isHeaderSearchVisible" :full-screen="false">
        <HeaderSearch @click.stop/>
    </PopupBackground>
</template>

<script>
import HeaderButton from '@/components/HeaderButton.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import PopupBackground from '@/components/PopupBackground.vue';
import HeaderSearch from '@/components/HeaderSearch.vue';

export default {
    components: {
        HeaderSearch,
        PopupBackground,
        HeaderMenu,
        HeaderButton
    },
    data () {
        return {
            isMainPage: this.$route.path === '/',
            isHeaderSearchVisible: false
        };
    }
};
</script>

<style lang="scss" scoped>
.header {
    background-color: $darkGreyBgColor;

    &__wrapper {
        @include displayFlex(space-between, center);
        max-width: 1440px;
        padding: 0 20px;
        margin: 0 auto;
        height: 64px;

        &--main-page {
            height: 95px;
        }
    }

    &__group {
        @include displayFlex(space-between, center);
    }

    &__text {
        font-size: 18px;
        line-height: 20px;
        color: #939393;
        margin-left: 26px;
    }

    &__phone {
        @include displayFlex(space-between, center);
        margin-right: 32px;

        &-text {
            font-size: 16px;
            line-height: 20px;
            color: #999999;
            margin-left: 4px;
        }
    }

    &__search-icon {
        margin: 0 10px;
    }
}
</style>

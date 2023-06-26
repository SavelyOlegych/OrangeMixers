<template>
    <header class="header" id="header">
        <div class="header__wrapper container-wide" :class="{'header__wrapper--main-page': isMainPage}">
            <div class="header__left">
                <a class="header__logo-link" href="/">
                    <Logo class="header__logo"/>
                </a>
                <div class="header__text" v-if="!isMainPage">
                    Разработано в Германии. Сделано в России.
                </div>
                <HeaderMenu v-else/>
            </div>
            <div class="header__right">
                <div class="header__phone">
                    <img class="header__phone-icon" src="../../assets/svg/phone-icon.svg" alt="phone icon">
                    <a class="header__phone-text" href="tel:+79999999999">+7 (999) 999 99 99</a>
                </div>
                <HeaderButton @click="toggleHeaderSearch">
                    <img class="header__search-icon" src="../../assets/svg/search-icon.svg" alt="search icon" width="20" height="20">
                </HeaderButton>
            </div>
        </div>
        <PopupBackground
            :show="isHeaderSearchVisible"
            @update:show="setIsHeaderSearchVisible"
            :full-screen="false"
        >
            <HeaderSearch @click.stop/>
        </PopupBackground>
    </header>
</template>

<script>
import HeaderButton from '@/components/header/HeaderButton.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import PopupBackground from '@/components/PopupBackground.vue';
import HeaderSearch from '@/components/header/HeaderSearch.vue';
import Logo from '@/components/icons/Logo.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    components: {
        Logo,
        HeaderSearch,
        PopupBackground,
        HeaderMenu,
        HeaderButton
    },
    data () {
        return {
            isMainPage: this.$route.path === '/'
        };
    },
    computed: {
        ...mapState({
            isHeaderSearchVisible: state => state.popups.isHeaderSearchVisible
        })
    },
    methods: {
        ...mapActions({
            closeAllPopups: 'popups/closeAllPopups'
        }),
        ...mapMutations({
            setIsHeaderSearchVisible: 'popups/setIsHeaderSearchVisible'
        }),
        toggleHeaderSearch() {
            if (!this.isHeaderSearchVisible) {
                this.closeAllPopups();
            }

            this.setIsHeaderSearchVisible(!this.isHeaderSearchVisible);
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    background-color: $darkGreyBgColor;

    &__wrapper {
        display: flex;
        height: 64px;

        &--main-page {
            height: 95px;
        }
    }

    &__logo {
        display: block;
    }

    &__left {
        @include displayFlex(left, center);
        flex: 1 0 auto;
    }

    &__right {
        @include displayFlex(center, center);
        flex: 0 0 auto;
    }

    &__text {
        font-size: 18px;
        line-height: 20px;
        color: #939393;
        margin-left: 26px;
    }

    &__phone {
        @include displayFlex(center, center);
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

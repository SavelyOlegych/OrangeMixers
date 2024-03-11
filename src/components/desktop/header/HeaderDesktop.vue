<template>
    <header class="header" :class="{'header--main-page': isMainPage}" id="header">
        <div class="header__wrapper container-wide" :class="{'header__wrapper--main-page': isMainPage}">
            <div class="header__left">
                <RouterLink class="header__logo-link" to="/">
                    <Logo class="header__logo"/>
                </RouterLink>
                <div class="header__text" v-if="!isMainPage">
                    Разработано в Германии. Сделано в России.
                </div>
                <HeaderMenuDesktop v-else/>
            </div>
            <div class="header__right">
                <div class="header__phone">
                    <Phone class="header__phone-icon" />
                    <a class="header__phone-text" href="tel:+79999999999">+7 (999) 999 99 99</a>
                </div>
                <HeaderButtonDesktop @click="toggleHeaderSearch">
                    <Search class="header__search-icon" />
                </HeaderButtonDesktop>
            </div>
        </div>
        <PopupBackground
            :show="isHeaderSearchVisible"
            @updatePopupVisibility="setIsHeaderSearchVisible"
            :full-screen="false"
        >
            <HeaderSearchDesktop/>
        </PopupBackground>
    </header>
</template>

<script>
import HeaderButtonDesktop from '@/components/desktop/header/HeaderButtonDesktop.vue';
import HeaderMenuDesktop from '@/components/desktop/header/HeaderMenuDesktop.vue';
import PopupBackground from '@/components/PopupBackground.vue';
import HeaderSearchDesktop from '@/components/desktop/header/HeaderSearchDesktop.vue';
import Logo from '@/components/icons/Logo.vue';
import Phone from '@/components/icons/Phone.vue';
import Search from '@/components/icons/Search.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: { Search, Phone, HeaderMenuDesktop, HeaderButtonDesktop, Logo, HeaderSearchDesktop, PopupBackground },
    setup() {
        const store = useStore();
        const isHeaderSearchVisible = computed(() => store.state.popups.isHeaderSearchVisible);
        const setIsHeaderSearchVisible = value => store.commit('popups/setIsHeaderSearchVisible', value);
        const closeAllPopups = () => store.dispatch('popups/closeAllPopups');

        const toggleHeaderSearch = () => {
            if (!isHeaderSearchVisible.value) {
                closeAllPopups();
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.removeProperty('overflow');
            }

            setIsHeaderSearchVisible(!isHeaderSearchVisible.value);
        };

        const route = useRoute();

        return {
            isMainPage: route.path === '/',
            isHeaderSearchVisible,
            setIsHeaderSearchVisible,
            toggleHeaderSearch,
        }
    },
};
</script>

<style lang="scss" scoped>
.header {
    background-color: $darkGreyBgColor;

    &--main-page {
        background-color: transparent;
        position: relative;
        z-index: 10;
    }

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

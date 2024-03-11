<template>
    <nav class="header__menu">
        <RouterLink class="header__menu-item" to="/">
            О компании
        </RouterLink>
        <RouterLink class="header__menu-item" to="/">
            О продукции
        </RouterLink>
        <span
            class="header__menu-item"
            :class="{'header__menu-item--active': isCatalogVisible}"
            @click="toggleHeaderCatalog"
        >
            <span class="header__menu-text">
                Каталог товаров
            </span>
            <svg class="header__menu-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L5 5L1 1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </nav>
    <PopupBackground
        :show="isCatalogVisible"
        @updatePopupVisibility="setIsCatalogVisible"
        :full-screen="false">
        <HeaderCatalogPopupDesktop />
    </PopupBackground>
</template>

<script>
import PopupBackground from '@/components/PopupBackground.vue';
import HeaderCatalogPopupDesktop from '@/components/desktop/header/HeaderCatalogPopupDesktop.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    components: { HeaderCatalogPopupDesktop, PopupBackground },
    setup() {
        const store = useStore();
        const isCatalogVisible = computed(() => store.state.popups.isCatalogVisible);
        const setIsCatalogVisible = value => store.commit('popups/setIsCatalogVisible', value);
        const closeAllPopups = () => store.dispatch('popups/closeAllPopups');

        const toggleHeaderCatalog = () => {
            if (!isCatalogVisible.value) {
                closeAllPopups();
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.removeProperty('overflow');
            }

            setIsCatalogVisible(!isCatalogVisible.value);
        }

        return {
            isCatalogVisible,
            setIsCatalogVisible,
            toggleHeaderCatalog,
        }
    },
};
</script>

<style lang="scss" scoped>
.header__menu {
    @include displayFlex(center, center);
    padding-top: 5px;
    margin-left: 11px;

    &-item {
        @include orenburgcRegular;
        font-size: 18px;
        line-height: 24px;
        color: $lightGreyColor;
        transition: color .3s;
        cursor: pointer;
        margin-left: 25px;

        &:hover {
            color: $whiteColor;
        }
    }

    &-arrow {
        margin-bottom: 1px;
        stroke: $lightGreyColor;
        transition: all .3s;
    }

    &-item:hover &-arrow {
        stroke: $whiteColor;
    }

    &-item--active &-arrow {
        transform: rotate(-180deg);
    }
}
</style>

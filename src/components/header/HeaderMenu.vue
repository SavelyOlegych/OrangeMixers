<template>
    <nav class="header__menu">
        <a class="header__menu-item" href="#">
            <span class="header__menu-text">
                О компании
            </span>
        </a>
        <a class="header__menu-item" href="#">
            <span class="header__menu-text">
                О продукции
            </span>
        </a>
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
        @update:show="setIsCatalogVisible"
        :full-screen="false">
        <HeaderCatalogPopup @click.stop />
    </PopupBackground>
</template>

<script>
import PopupBackground from '@/components/PopupBackground.vue';
import HeaderCatalogPopup from '@/components/header/HeaderCatalogPopup.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    components: { HeaderCatalogPopup, PopupBackground },
    computed: {
        ...mapState({
            isCatalogVisible: state => state.popups.isCatalogVisible
        })
    },
    methods: {
        ...mapMutations({
            setIsCatalogVisible: 'popups/setIsCatalogVisible'
        }),
        ...mapActions({
            closeAllPopups: 'popups/closeAllPopups'
        }),
        toggleHeaderCatalog() {
            if (!this.isCatalogVisible) {
                this.closeAllPopups();
            }

            this.setIsCatalogVisible(!this.isCatalogVisible);
        }
    }
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
        color: #BEBEBE;
        transition: color .3s;
        cursor: pointer;
        margin-left: 25px;

        &:hover {
            color: #FFFFFF;
        }
    }

    &-arrow {
        margin-bottom: 1px;
        stroke: #BEBEBE;
        transition: all .3s;
    }

    &-item:hover &-arrow {
        stroke: #FFFFFF;
    }

    &-item--active &-arrow {
        transform: rotate(-180deg);
    }
}
</style>

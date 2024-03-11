<template>
    <nav class="footer__menu">
        <RouterLink
            class="footer__menu-item"
            v-for="item in menuItems"
            :key="item.id"
            :to="item.link"
        >
            <MenuArrow class="footer__menu-arrow"/>
            <span class="footer__menu-text">
                {{ item.text }}
            </span>
        </RouterLink>
    </nav>
</template>

<script>
import MenuArrow from '@/components/icons/MenuArrow.vue';

export default {
    components: { MenuArrow },
    setup() {
        const menuItems = [
            {
                id: 1,
                text: 'О компании',
                link: '#'
            },
            {
                id: 2,
                text: 'Где купить',
                link: '#'
            },
            {
                id: 3,
                text: 'Сотрудничество',
                link: '#'
            },
            {
                id: 4,
                text: 'Сервисное обслуживание',
                link: '#'
            },
            {
                id: 5,
                text: 'Покупателям',
                link: '#'
            },
            {
                id: 6,
                text: 'Контакты',
                link: '#'
            }
        ];

        return {
            menuItems
        }
    },
};
</script>

<style lang="scss" scoped>
.footer__menu {
    display: grid;
    grid-template-columns: 48.16% max-content;
    grid-auto-rows: min-content;
    width: 31.67%;

    &-item {
        @include displayFlex(left, center);
        margin-bottom: 20px;

        &:hover .footer__menu-arrow {
            transform: translate(5px);
        }
    }

    &-arrow {
        transition: transform .3s;
    }

    &-text {
        margin-left: 12px;
        font-size: 16px;
        line-height: 24px;
        color: $lightGreyColor;
    }
}
</style>

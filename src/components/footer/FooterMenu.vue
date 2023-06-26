<template>
    <nav class="footer__menu">
        <a
            class="footer__menu-item"
            v-for="item in menuItems"
            :key="item.text"
            :href="item.link"
        >
            <FooterMenuArrow class="footer__menu-arrow"/>
            <span class="footer__menu-text">
                {{ item.text }}
            </span>
        </a>
    </nav>
</template>

<script>
import FooterMenuArrow from '@/components/icons/FooterMenuArrow.vue';

export default {
    components: { FooterMenuArrow },
    data() {
        return {
            menuItems: [
                {
                    text: 'О компании',
                    link: '#'
                },
                {
                    text: 'Где купить',
                    link: '#'
                },
                {
                    text: 'Сотрудничество',
                    link: '#'
                },
                {
                    text: 'Сервисное обслуживание',
                    link: '#'
                },
                {
                    text: 'Покупателям',
                    link: '#'
                },
                {
                    text: 'Контакты',
                    link: '#'
                }
            ]
        }
    }
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
        color: #BEBEBE;
    }
}
</style>

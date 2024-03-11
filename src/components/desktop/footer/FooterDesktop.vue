<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <RouterLink class="footer__logo-link" to="/">
                    <Logo class="footer__logo"/>
                </RouterLink>
                <FooterMenuDesktop/>
                <FooterContactsDesktop/>
                <FooterSocialDesktop/>
            </div>
        </div>
        <a class="footer__bottom" href="#header">
            <FooterArrow/>
        </a>
    </footer>
</template>

<script>
import FooterArrow from '@/components/icons/FooterArrow.vue';
import Logo from '@/components/icons/Logo.vue';
import FooterMenuDesktop from '@/components/desktop/footer/FooterMenuDesktop.vue';
import FooterContactsDesktop from '@/components/desktop/footer/FooterContactsDesktop.vue';
import FooterSocialDesktop from '@/components/desktop/footer/FooterSocialDesktop.vue';

export default {
    components: { FooterSocialDesktop, FooterContactsDesktop, FooterMenuDesktop, Logo, FooterArrow }
};
</script>

<style lang="scss" scoped>
.footer {
    background-color: #202122;
    padding-top: 60px;

    &__top {
        @include displayFlex($alignItems: flex-start);
        height: 282px;
    }

    &__bottom {
        @include displayFlex(center, center);
        height: 100px;
        border-top: 1px solid #2C2D2E;

        &:hover {
            background-color: #272829;
        }
    }

    &__logo {
        display: block;
        margin-right: 86px;
    }
}
</style>

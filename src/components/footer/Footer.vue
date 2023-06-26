<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <a class="footer__logo-link" href="/">
                    <Logo class="footer__logo"/>
                </a>
                <FooterMenu/>
                <FooterContacts/>
                <FooterSocial/>
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
import FooterMenu from '@/components/footer/FooterMenu.vue';
import FooterContacts from '@/components/footer/FooterContacts.vue';
import FooterSocial from '@/components/footer/FooterSocial.vue';

export default {
    components: { FooterSocial, FooterContacts, FooterMenu, Logo, FooterArrow }
};
</script>

<style lang="scss" scoped>
.footer {
    background-color: #202122;
    overflow: hidden;

    &__top {
        display: flex;
        height: 282px;
        margin-top: 60px;
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

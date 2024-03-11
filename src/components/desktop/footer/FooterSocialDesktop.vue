<template>
    <div class="footer__social">
        <div class="footer__social-title">Мы в соцсетях</div>
        <div class="footer__social-items">
            <a class="footer__social-item" href="#">
                <FooterInstagram/>
            </a>
        </div>
    </div>
</template>

<script>
import FooterInstagram from '@/components/icons/FooterInstagram.vue';

export default {
    components: { FooterInstagram }
};
</script>

<style lang="scss" scoped>
.footer__social {
    margin-left: 6.92%;

    &-title {
        @include orenburgcBold;
        font-size: 16px;
        line-height: 17.5px;
        color: $whiteColor;
        margin-bottom: 15px;
    }
}
</style>

<template>
    <div class="footer__contacts">
        <div class="footer__contacts-title">
            Есть вопросы?
        </div>
        <a class="footer__contacts-item" href="mailto:hello@orangemixers.ru">
            <FooterEnvelope/>
            <span class="footer__contacts-text">hello@orangemixers.ru</span>
        </a>
        <a class="footer__contacts-item" href="tel:+7 (495) 543 23 45">
            <FooterPhone/>
            <span class="footer__contacts-text">+7 (495) 543 23 45</span>
        </a>
    </div>
</template>

<script>
import FooterEnvelope from '@/components/icons/FooterEnvelope.vue';
import FooterPhone from '@/components/icons/FooterPhone.vue';

export default {
    components: { FooterPhone, FooterEnvelope }
};
</script>

<style lang="scss" scoped>
.footer__contacts {
    margin-left: 6%;

    &-title {
        @include orenburgcBold;
        font-size: 16px;
        line-height: 17.5px;
        color: $whiteColor;
        margin-bottom: 23px;
    }

    &-item {
        @include displayFlex($alignItems: center);
        font-size: 14px;
        line-height: 16.5px;
        color: $lightGreyColor;
        margin-bottom: 23px;
    }

    &-text {
        margin-left: 8px;
        vertical-align: bottom;
    }
}
</style>

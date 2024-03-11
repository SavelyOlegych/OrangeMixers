<template>
    <section class="main-page__collections">
        <div class="main-page__collections-left">
            <h2 class="main-page__collections-title">
                Коллекции
            </h2>
            <p class="main-page__collections-text">
                Чувственность и элегантность, пуризм и эксклюзивность, а может уют и романтичность? Наши коллекции, разработанные лучшими дизайнерами отрасли, помогут создать вам именно ту атмосферу ванной комнаты, которую вы всегда искали.
            </p>
            <RouterLink class="main-page__collections-link" to="#">
                <MenuArrow class="main-page__collections-link-arrow" />
                <span class="main-page__collections-link-text">Все коллекции</span>
            </RouterLink>
        </div>
        <div class="main-page__collections-right">
            <img src="@/assets/images/collections.png" alt="" class="main-page__collections-img">
            <div class="main-page__collections-info">
                <h3 class="main-page__collections-info-title">Aristo</h3>
                <CommonButton class="main-page__collections-info-button">
                    <span class="main-page__collections-info-text">от 4 990 ₽</span>
                </CommonButton>
            </div>
        </div>
    </section>
</template>

<script>
import MenuArrow from '@/components/icons/MenuArrow.vue';
import CommonButton from '@/components/CommonButton.vue';

export default {
    components: { CommonButton, MenuArrow }
}
</script>

<style lang="scss" scoped>
.main-page__collections {
    @include displayFlex(space-between);
    max-width: 1920px;
    margin: 0 auto 80px;
    height: calc(544 / 1440 * 100vw);
    background-color: $darkGreyBgColor;

    @media (min-width: 1441px) {
        height: calc(665 / 1920 * 100vw);
    }

    @media (min-width: 1920px) {
        height: 665px;
    }

    &-left {
        margin-right: 86px;
        padding-left: 40px;
        display: flex;
        flex-direction: column;

        @media (min-width: 1280px) {
            margin-left: calc((100% - 1280px) / 2);
        }

        @media (min-width: 1920px) {
            margin-left: 320px;
        }
    }

    &-title {
        @include orenburgcRegular;
        font-size: 32px;
        line-height: 36px;
        margin-top: 67px;
        margin-bottom: 20px;
        color: $whiteColor;
    }

    &-text {
        font-size: 18px;
        line-height: 24px;
        width: 400px;
        color: $lightGreyColor;

        @media (min-width: 1280px) {
            line-height: 32px;
            width: 486px;
        }
    }

    &-link {
        @include displayFlex($alignItems: center);
        margin-top: auto;
        margin-bottom: 27px;
        color: $lightGreyColor;
        gap: 15px;

        &:hover .main-page__collections-link-arrow {
            transform: translateX(10px);
        }
    }

    &-link-arrow {
        transition: transform 0.3s;
    }

    &-right {
        width: calc(748 / 1440 * 100%);
        position: relative;

        @media (min-width: 1441px) {
            width: calc(988 / 1920 * 100%);
        }
    }

    &-img {
        width: 100%;
        height: 100%;
        clip-path: polygon(2.0242% 0, 100% 0, 100% 100%, 0% 100%);
        object-fit: cover;
    }

    &-info {
        position: absolute;
        left: 63px;
        top: 50px;

        @media (min-width: 1280px) {
            top: 76px;
        }
    }

    &-info-title {
        text-transform: uppercase;
        color: $whiteColor;
        font-size: 18px;
        line-height: 32px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-bottom: 6px;
    }

    &-info-button {
        padding: 14px 16px 12px;
        font-size: 24px;
        line-height: 24px;
    }
}
</style>

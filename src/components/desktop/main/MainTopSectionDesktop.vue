<template>
    <section class="main-page__top-section">
        <div class="main-page__top-section-inner container">
            <div class="main-page__top-section-left">
                <h1 class="main-page__top-section-title">Сантехника и мебель для ванной комнаты</h1>
                <ul class="main-page__top-section-menu">
                    <li class="main-page__top-section-item">
                        <MenuArrow class="main-page__top-section-item-arrow" />
                        <span class="main-page__top-section-item-text">О компании</span>
                    </li>
                    <li class="main-page__top-section-item">
                        <MenuArrow class="main-page__top-section-item-arrow" />
                        <span class="main-page__top-section-item-text">О продукции</span>
                    </li>
                    <li class="main-page__top-section-item">
                        <MenuArrow class="main-page__top-section-item-arrow" />
                        <span class="main-page__top-section-item-text">Каталог товаров</span>
                    </li>
                </ul>
            </div>
            <Swiper
                class="main-page__top-section-slider"
                wrapper-class="main-page__top-section-slider-wrapper"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{delay: 5000}"
                :modules="[SwiperEffectFade(), SwiperAutoplay()]"
                effect="fade"
                :fade-effect="{
                    crossFade: true
                }"
            >
                <SwiperSlide
                    class="main-page__top-section-slide"
                    v-for="slide in slides"
                    :key="slide.id"
                >
                    <img
                        class="main-page__top-section-img"
                        :class="{'main-page__top-section-img--full-height': slide.id === 3}"
                        :src="slide.src"
                        :alt="slide.alt"
                    >
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script>
import MenuArrow from '@/components/icons/MenuArrow.vue';
import useMainSlider from '@/composables/useMainSlider';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
    components: { MenuArrow, Swiper, SwiperSlide },
    setup() {
        const slides = useMainSlider();
        const SwiperEffectFade = () => EffectFade;
        const SwiperAutoplay = () => Autoplay;

        return {
            slides,
            SwiperEffectFade,
            SwiperAutoplay,
        }
    },
}
</script>

<style lang="scss" scoped>
.main-page__top-section {
    background-color: $darkGreyBgColor;
    max-height: 694px;
    position: relative;
    top: -95px;
    margin-bottom: -95px;

    &-inner {
        @include displayFlex(space-between);
        position: relative;
    }

    &-left {
        width: 617px;
        flex-shrink: 0;
        margin-right: 30px;

        @media (max-width: 1280px) {
            width: 50%;
        }
    }

    &-title {
        @include orenburgcRegular;
        font-size: 60px;
        line-height: 64px;
        color: $whiteColor;
        margin-top: 192px;

        @media (max-width: 1439px) {
            font-size: 48px;
            line-height: 52px;
        }
    }

    &-menu {
        margin-top: 54px;
    }

    &-slider {
        margin-top: auto;
    }

    &-slide {
        margin-top: auto;
    }

    &-img {
        object-fit: cover;
        max-width: 100%;

        &--full-height {
            @media (max-width: 1280px) {
                height: 600px;
            }
        }
    }
}
</style>

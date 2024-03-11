<template>
    <section class="main-page__description">
        <div class="main-page__description-inner container">
            <div class="main-page__description-text">
                <p class="main-page__description-text-paragraph">
                    <CapitalLetterO class="main-page__description-capital"/>
                    <span class="main-page__description-text-orange">range</span> – немецкая торговая марка. Главный офис и основное производство расположены в Германии.
                    Производим смесители,  душевые кабины, ванны и мебель для ванных комнат.
                </p>
                <p class="main-page__description-text-paragraph">
                    Мы предлагаем качественную продукцию немецкого производства, которая полностью адаптирована к реалиям российского рынка.
                </p>
            </div>
            <div class="main-page__description-items">
                <div class="main-page__description-item">
                    <MainBlueprint/>
                    <div class="main-page__description-item-info">
                        <div class="main-page__description-item-title">
                            Cобственное производство
                        </div>
                        <div class="main-page__description-item-text">
                            Высокий уровень технологий позволяет гарантировать качество продукции на протяжении 10 лет
                        </div>
                    </div>
                </div>
                <div class="main-page__description-item">
                    <MainApple/>
                    <div class="main-page__description-item-info">
                        <div class="main-page__description-item-title">
                            Экологичность и доступность
                        </div>
                        <div class="main-page__description-item-text">
                            Уникальный состав сплава делает продукцию Orange безопасной для потребителя
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CapitalLetterO from '@/components/icons/CapitalLetterO.vue';
import MainBlueprint from '@/components/icons/MainBlueprint.vue';
import MainApple from '@/components/icons/MainApple.vue';

export default {
    components: { MainApple, MainBlueprint, CapitalLetterO }
};
</script>

<style lang="scss" scoped>
.main-page__description {
    background-color: #F6F6F6;
    padding: 80px 0;

    &-inner {
        display: flex;
    }

    &-text {
        margin-right: 10.17%;
        font-size: 18px;
        line-height: 32px;
        width: 649px;

        &-orange {
            @include orangeTextBold;
        }

        &-paragraph:first-child {
            margin-bottom: 24px;
        }
    }

    &-capital {
        float: left;
        margin-right: 12px;
        margin-top: 10px;
    }

    &-item {
        @include displayFlex(space-between);
        width: 407px;
        padding-right: 40px ;

        &:first-child {
            margin-bottom: 32.5px;
        }

        &-title {
            @include orenburgcBold;
            margin-bottom: 4px;
        }
    }

    &-item-text {
        width: 290px;
        font-size: 15px;
        line-height: 20px;
        color: #7B7B7B;
    }
}
</style>

<template>
    <section class="main-page__pros">
        <h2 class="main-page__pros-title">
            Наши преимущества
        </h2>
        <div class="main-page__pros-items">
            <div class="main-page__pros-item">
                <MainProsRefund class="main-page__pros-item-icon main-page__pros-item-icon--refund" />
                <h3 class="main-page__pros-item-title">
                    Бесплатный возврат
                </h3>
                <div class="main-page__pros-item-text">
                    Если товар вам не подходит, вы можете верунть его в течении 30 дней.
                </div>
            </div>
            <div class="main-page__pros-item">
                <MainProsWarranty class="main-page__pros-item-icon main-page__pros-item-icon--warranty" />
                <h3 class="main-page__pros-item-title">
                    Гарантия 10 лет
                </h3>
                <div class="main-page__pros-item-text">
                    Стандарты ISO9001 и двойной контроль качества гарантируют долгосрочную безупречную работу изделий.
                </div>
            </div>
            <div class="main-page__pros-item">
                <MainProsPayment class="main-page__pros-item-icon main-page__pros-item-icon--payment" />
                <h3 class="main-page__pros-item-title">
                    Безопасная оплата
                </h3>
                <div class="main-page__pros-item-text">
                    Банковской картой или наличными при получении.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MainProsRefund from '@/components/icons/MainProsRefund.vue';
import MainProsWarranty from '@/components/icons/MainProsWarranty.vue';
import MainProsPayment from '@/components/icons/MainProsPayment.vue';

export default {
    components: { MainProsPayment, MainProsWarranty, MainProsRefund }
}
</script>

<style lang="scss" scoped>
.main-page__pros {
    margin-bottom: 80px;

    &-title {
        @include orenburgcRegular;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: -0.5px;
        text-align: center;
        margin-bottom: 54px;
    }

    &-items {
        @include displayFlex(center);
    }

    &-item {
        @include displayFlex($alignItems: center);
        flex-direction: column;

        &:nth-child(n + 2) {
            margin-left: 118px;
        }

        &-title {
            @include orenburgcRegular;
            font-size: 20px;
            margin-bottom: 12px;
        }

        &-text {
            width: 200px;
            text-align: center;
            font-size: 15px;
            line-height: 20px;
            color: #7B7B7B;
        }

        &:nth-child(2) &-text {
            width: 280px;
        }

        &-icon {
            &--refund {
                margin-top: 6.3px;
                margin-bottom: 30px;
            }

            &--warranty {
                margin-bottom: 29px;
            }

            &--payment {
                margin-top: 3.5px;
                margin-bottom: 32px;
            }
        }
    }
}
</style>

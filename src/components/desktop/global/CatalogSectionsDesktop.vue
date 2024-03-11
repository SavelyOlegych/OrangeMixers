<template>
    <section class="catalog-sections main-page__catalog-sections container">
        <h2 class="catalog-sections__title">
            Наша продукция
        </h2>
        <div class="catalog-sections__items">
            <RouterLink class="catalog-sections__item" to="#">
                <img class="catalog-sections__image" src="@/assets/images/main-sections/sections-mixers.png" alt="Смесители">
                <span class="catalog-sections__name">
                    Смесители
                </span>
            </RouterLink>
            <RouterLink class="catalog-sections__item" to="#">
                <img class="catalog-sections__image" src="@/assets/images/main-sections/sections-furniture.png" alt="Мебель">
                <span class="catalog-sections__name">
                    Мебель
                </span>
            </RouterLink>
            <RouterLink class="catalog-sections__item" to="#">
                <img class="catalog-sections__image" src="@/assets/images/main-sections/sections-douche.png" alt="Душевая программа">
                <span class="catalog-sections__name">
                    Душевая программа
                </span>
            </RouterLink>
            <RouterLink class="catalog-sections__item" to="#">
                <img class="catalog-sections__image" src="@/assets/images/main-sections/sections-ceramics.png" alt="Фаянс">
                <span class="catalog-sections__name">
                    Фаянс
                </span>
            </RouterLink>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.catalog-sections {
    &__title {
        @include orenburgcRegular;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: -0.5px;
        margin-bottom: 28px;
    }

    &__items {
        display: grid;
        grid-template-columns: minmax(auto, 287px) repeat(3, minmax(auto, 292px));
        gap: 1.027%;
    }

    &__item {
        position: relative;
    }

    &__image {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &__name {
        @include orenburgcBold;
        font-size: 20px;
        line-height: 22px;
        color: $whiteColor;
        position: absolute;
        bottom: 24px;
        left: 24px;
        right: 43px;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.2);
            top: -20px;
        }
    }
}

.main-page__catalog-sections {
    margin-top: 80px;
    margin-bottom: 100px;
}
</style>

<template>
    <div class="header__catalog">
        <a class="header__catalog-item" href="#">
            <img class="header__catalog-image" src="@/assets/svg/tap.svg" alt="tap" width="80" height="80">
            <div class="header__catalog-title">
                Смесители
            </div>
        </a>
        <a class="header__catalog-item" href="#">
            <img class="header__catalog-image" src="@/assets/svg/furniture.svg" alt="furniture" width="80" height="80">
            <div class="header__catalog-title">
                Мебель
            </div>
        </a>
        <a class="header__catalog-item" href="#">
            <img class="header__catalog-image" src="@/assets/svg/douche.svg" alt="douche" width="80" height="80">
            <div class="header__catalog-title">
                Душевая программа
            </div>
        </a>
        <a class="header__catalog-item" href="#">
            <img class="header__catalog-image" src="@/assets/svg/ceramics.svg" alt="ceramics" width="80" height="80">
            <div class="header__catalog-title">
                Фаянс
            </div>
        </a>
    </div>
</template>

<style lang="scss">
@include popupKeyframes(showCatalog);

.header__catalog {
    @media (max-width: 1300px) {
        margin: 0 5%;
    }

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
    background-color: #FFFFFF;
    height: 240px;
    margin: 0 auto;
    animation: showCatalog .5s;

    &-item {
        @include displayFlex(center, center);
        flex-direction: column;
    }
    &-item:nth-child(n + 1) {
        border-left: 1px solid #ECECEC;
    }
    &-item:hover {
        background-color: #FAFAFA;
    }
    &-image {
        margin-bottom: 26px;
    }
    &-title {
        @include orenburgcFont400;
        font-size: 18px;
        line-height: 20px;
        color: #151716;
    }
}
</style>

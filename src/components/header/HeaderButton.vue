<template>
    <button class="header__button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.header__button {
    @include displayFlex(center, center);
    border: 1px solid #494949;
    border-radius: 2px;
    height: 40px;
    cursor: pointer;
    background-color: transparent;

    &:hover {
        border-color: gray;
    }
}
</style>

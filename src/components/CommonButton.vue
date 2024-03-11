<template>
    <a class="common-button" @click.prevent>
        <slot></slot>
    </a>
</template>

<style lang="scss" scoped>
.common-button {
    @include displayFlex(center, center);
    background-color: $orangeColor;
    font-weight: bold;
    color: $whiteColor;
    border-radius: 2px;

    .common-button-wrapper & {
        z-index: 10;
        position: relative;
        transition: transform 0.6s;

        &:hover {
            transform: translate(3.5px, 3.5px);
        }
    }
}
</style>

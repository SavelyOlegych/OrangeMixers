<template>
    <div class="common-button-wrapper">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.common-button-wrapper {
    position: relative;
    display: inline-block;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 3.5px;
        left: 3.5px;
        border: 1.2px solid $orangeColor;
        border-radius: 2px;
    }
}
</style>

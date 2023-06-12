<template>
    <button class="header__button">
        <slot></slot>
    </button>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header__button {
    @include displayFlex(center, center);
    border: 1px solid #494949;
    border-radius: 2px;
    height: 40px;
    cursor: pointer;
    background-color: transparent;
}
</style>

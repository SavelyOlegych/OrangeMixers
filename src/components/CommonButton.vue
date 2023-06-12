<template>
    <div class="common-button-wrapper">
        <button class="common-button" @click.prevent>
            <slot></slot>
        </button>
    </div>
</template>

<style lang="scss">
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
        border: 1.2px solid $buttonColor;
        border-radius: 2.33px;
    }
}

.common-button {
    background-color: $buttonColor;
    font-weight: 700;
    color: #FFFFFF;
    border-radius: 2.33px;
    z-index: 10;
    position: relative;
    transition: 0.6s;

    &:hover {
        transform: translate(3.5px, 3.5px);
    }
}
</style>

<template>
    <div
        class="popup-bg"
        :class="{[changeBgSizeClass]: !fullScreen}"
        v-if="show"
        @click="bgClicked"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        fullScreen: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        changeBgSizeClass() {
            return this.$route.path === '/' ? 'popup-bg--except-main-header' : 'popup-bg--except-header';
        }
    },
    methods: {
        bgClicked() {
            this.$emit('update:show', false)
        }
    }
};
</script>

<style lang="scss" scoped>
.popup-bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);

    &--except-header {
        top: 64px;
    }

    &--except-main-header {
        top: 95px;
    }
}
</style>

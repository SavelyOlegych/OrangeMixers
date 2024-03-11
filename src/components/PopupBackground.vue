<template>
    <transition name="fade">
        <div
            class="popup-bg"
            :class="{[backgroundSizeClass]: !fullScreen}"
            v-if="show"
            @click.self="backgroundClick"
        >
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import { useRoute } from 'vue-router';

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
    setup(props, { emit }) {
        const route = useRoute();

        const backgroundClick = () => {
            document.body.style.removeProperty('overflow');
            emit('updatePopupVisibility', false);
        };

        return {
            backgroundSizeClass: route.path === '/' ? 'popup-bg--except-main-header' : 'popup-bg--except-header',
            backgroundClick
        }
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.popup-bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    z-index: 100;

    &--except-header {
        top: 64px;
    }

    &--except-main-header {
        top: 95px;
    }
}
</style>

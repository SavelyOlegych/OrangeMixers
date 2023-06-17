<template>
    <form class="header__search">
        <h1 class="header__search-title">
            Что вы ищете?
        </h1>
        <input
            class="header__search-input"
            type="text"
            placeholder="Раковина для ванной комнаты..."
            v-model="inputValue"
        >
        <CommonButton
            class="header__search-button-wrapper"
            @click="$router.push(`/search?search_string=${inputValue}`)"
        >
            <div class="header__search-button-text">Искать</div>
        </CommonButton>
    </form>
</template>

<script>
import CommonButton from '@/components/CommonButton.vue';

export default {
    components: { CommonButton },
    data() {
        return {
            inputValue: ''
        }
    }

};
</script>

<style lang="scss" scoped>
@include popupKeyframes(showSearch);

.header__search {
    display: grid;
    grid-template-columns: 304px 1fr auto;
    align-items: center;
    max-width: 1086px;
    height: 121px;
    background-color: #FFFFFF;
    margin: 0 auto;
    animation: showSearch .3s;

    &-title {
        @include orenburgcRegular;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: -0.5px;
        text-align: center;
        margin-left: 12px;
    }

    &-input {
        height: 56px;
        border: 1px solid #D9D9D9;
        border-radius: 2px;
        transition: border-color .3s;
        padding: 0 16px;

        font-family: 'PT Sans', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        &:hover {
            border-color: #747474;
        }

        &:focus {
            border-color: #EC9F76;
            box-shadow: 0 0 6px #FF7028;
        }
    }

    &-button-wrapper {
        margin-left: 12px;
        margin-right: 59.5px;
        margin-bottom: 5px;
    }

    &-button-text {
        font-size: 19px;
        line-height: 28px;
        margin: 11.5px 36.33px;
    }
}
</style>

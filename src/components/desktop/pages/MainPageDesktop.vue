<template>
    <main class="main-page">
        <MainTopSectionDesktop/>
        <MainDescriptionDesktop/>
        <CatalogSectionsDesktop/>
        <MainCollectionsDesktop/>
        <MainPromoDesktop/>
        <MainProsDesktop/>
        <MainBottomBannerDesktop/>
    </main>
</template>

<script>
import MainDescriptionDesktop from '@/components/desktop/main/MainDescriptionDesktop.vue';
import CatalogSectionsDesktop from '@/components/desktop/global/CatalogSectionsDesktop.vue';
import MainBottomBannerDesktop from '@/components/desktop/main/MainBottomBannerDesktop.vue';
import MainProsDesktop from '@/components/desktop/main/MainProsDesktop.vue';
import MainPromoDesktop from '@/components/desktop/main/MainPromoDesktop.vue';
import MainCollectionsDesktop from '@/components/desktop/main/MainCollectionsDesktop.vue';
import MainTopSectionDesktop from '@/components/desktop/main/MainTopSectionDesktop.vue';

export default {
    components: { MainTopSectionDesktop, MainCollectionsDesktop, MainPromoDesktop, MainProsDesktop, MainBottomBannerDesktop, CatalogSectionsDesktop, MainDescriptionDesktop },
};
</script>

<template>
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
</template>

<script>
import HeaderSection from './Header.vue'
import MainSection from './AccueilSection.vue'
import FooterSection from './Footer.vue'

    export default{
        name : 'AccueilPage',
        components : {
            HeaderSection,
            MainSection,
            FooterSection,
        }
    }
</script>


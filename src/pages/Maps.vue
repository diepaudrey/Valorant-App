<template>

    <HeaderSection/>
    <MainSection/>
    <FooterSection/>

</template>

<script>
import HeaderSection from '../components/Header.vue'
import MainSection from '../components/MapSection.vue'
import FooterSection from '../components/Footer.vue'

    export default{
        name : 'MapPage',
        components : {
            HeaderSection,
            MainSection,
            FooterSection,
        }
    }


</script>

<template>

    <HeaderSection/>
    <MainSection/>
    <FooterSection/>

</template>

<script>
import HeaderSection from './Header.vue'
import MainSection from './MapSection.vue'
import FooterSection from './Footer.vue'

    export default{
        name : 'MapPage',
        components : {
            HeaderSection,
            MainSection,
            FooterSection,
        }
    }


</script>


<style>


</style>
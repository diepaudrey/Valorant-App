<template>
    <section>
        <HeaderSection/>
        <MainSection/>
        <FooterSection/>
    </section>  
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

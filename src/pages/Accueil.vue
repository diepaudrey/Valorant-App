<template>
    <body class="page">
        <HeaderSection/>
        <MainSection/>
        <FooterSection/>
    </body>
       
   
    
</template>

<script>
import HeaderSection from '../components/Header.vue'
import MainSection from '../components/AccueilSection.vue'
import FooterSection from '../components/Footer.vue'


    export default{
        name : 'AccueilPage',
        components : {
            HeaderSection,
            MainSection,
            FooterSection,
        }
    }
</script>




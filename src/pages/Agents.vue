<template>
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
</template>

<script>
    import HeaderSection from '../components/Header.vue'
    import MainSection from '../components/AgentSection.vue'
    import FooterSection from '../components/Footer.vue'


    export default{
        name : 'AgentsPage',
        components : {
            HeaderSection,
            MainSection,
            FooterSection,
        }

    }


</script>


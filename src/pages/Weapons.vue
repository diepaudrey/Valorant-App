<template>
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
</template>

<script>
    import HeaderSection from '../components/Header.vue'
    import MainSection from '../components/WeaponSection.vue'
    import FooterSection from '../components/Footer.vue'


    export default{
        name : 'ArsenalPage',
        components : {
            HeaderSection,
            MainSection,
            FooterSection,
        }

    }


</script>



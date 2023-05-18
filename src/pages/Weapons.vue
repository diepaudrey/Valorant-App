<template>
    <section>
        <HeaderSection/>
        <MainSection/>
        <FooterSection/>
    </section>
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



<template>
    <HeaderSection/>
    <MainSection/>
    <FooterSection/>
</template>

<script>
    import HeaderSection from './Header.vue'
    import MainSection from './ArsenalSection.vue'
    import FooterSection from './Footer.vue'


    export default{
        name : 'ArsenalPage',
        components : {
            HeaderSection,
            MainSection,
            FooterSection,
        }

    }


</script>


<style>

</style>
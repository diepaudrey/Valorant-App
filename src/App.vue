

<template>
    <body>
    <HeaderSection/>
    <AccueilSection/>
    <!--<WeaponCard/>-->
    </body>

</template>

<script>
/* eslint-disable */

import HeaderSection from './components/Header.vue'
import AccueilSection from './components/Accueil.vue'
import WeaponCard from './components/WeaponCard.vue'


export default {
  name: 'App',
  components: {
    HeaderSection,
    AccueilSection,
    WeaponCard,
    
  }
}
</script>

<style>

@font-face {
	font-family: 'Valorant';
	src: url('~/src/assets/Valorant_Font.ttf') format('truetype')
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

html,body{
  margin :0;
  padding : 0;
  background-color: #ECE8E1
}


</style>

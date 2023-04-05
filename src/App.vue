

<template>
    
  <router-view></router-view>

</template>

<script>
/* eslint-disable */

import AccueilPage from './pages/Accueil.vue'
import MapPage from './pages/Maps.vue'
import WeaponPage from './pages/Weapons.vue'

import AgentSection from './components/AgentSection.vue'


export default {
  name: 'App',
  components: {
    AccueilPage,
    MapPage,
    WeaponPage,
    
    AgentSection,
  }
}
</script>

<style>

@font-face {
	font-family: 'Valorant';
	src: url('~/src/assets/Valorant_Font.ttf') format('truetype')
}

@font-face {
	font-family: 'Tw Cen MT';
	src: url('~/src/assets/TwCenClassMTStd-Regular.otf') format('truetype')
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}


body{
  margin :0;
  padding : 0;
  background-color: #ECE8E1;
}


h3{
  font-family: 'Valorant';
  font-size: 2em;
  color : #111;
}

h2{
    margin-bottom :0;
    margin-right : 60%;
    font-family : Valorant;
    font-size : 3em;
    color :  #111;
}




</style>

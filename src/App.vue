

<template>
    <body>
    <AccueilPage/>
    </body>

</template>

<script>
/* eslint-disable */

import AccueilPage from './components/Accueil.vue'


export default {
  name: 'App',
  components: {
    AccueilPage,
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

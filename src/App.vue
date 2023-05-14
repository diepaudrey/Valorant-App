

<template>
  <div>
    <router-view></router-view>
  </div>
  
  <!-- <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> -->

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
/*define colors*/
:root{
  --grey-border :#BDBAB4;
  --dark-blue : #0F1923;
  --red : #FF4655;
}

@font-face {
	font-family: 'Valorant';
	src: url('~/src/assets/Valorant_Font.ttf') format('truetype')
}

@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&display=swap');



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
input:focus{
  color : var(--red);
  border-bottom: 1px solid var(--red);
}
input::-webkit-input-placeholder {
    color: var(--grey-border);
}
input:focus::-webkit-input-placeholder {
    color: var(--red);
}

.search-sort-container{
    display : flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}




@media screen and (min-width:1024px){


.title{
    margin-right : 60%;
    font-family : Valorant;
    font-size : 3.5em;
    color :  #111;
    margin :0;
    padding : 0;
}


  .img-header{
    width : 100vw;
    height : 70vh;
    background-size : cover;
    background-position: center;

}

input{
  width: 100%;
  border: 0;
  border-bottom: 1px solid #878582;
  outline: 0;
  font-size: 1rem;
  color: #878582;
  padding: 7px 0;
  background: transparent;
}

label{
  font-size: 1rem;
  color: #878582;
  padding : 10px;
}

select{
  color: #878582;
  background: transparent;
  border: 0;
  padding: 5px 0;
  outline-color: var(--grey-border);
  

}


/* input:focus{
  color : var(--red);
  border-bottom: 1px solid var(--red);
}
input::-webkit-input-placeholder {
    color: var(--grey-border);
}
input:focus::-webkit-input-placeholder {
    color: var(--red);
} */



/*Style the title and search bar of every pages*/
.header-section {
    display : flex;
    flex-direction : row;
    justify-content: space-around;
    align-items: center;
    margin-top : 5vh;
    margin-bottom: 5vh;
}


}



@media screen and (min-width: 767px) and (max-width:1023px){
  .title{
    font-family : Valorant;
    font-size : 2.5em;
    color :  #111;
    margin :0;
    padding : 0;

}


  .img-header{
    width : 100%;
    height : 40vh;
    background-size : cover;
    background-position: center;
}

input{
  width: 100%;
  border: 0;
  border-bottom: 1px solid #878582;
  outline: 0;
  font-size: 1rem;
  color: #878582;
  padding: 7px 0;
  background: transparent;
}



/*Style the title and search bar of every pages*/
.header-section {
    display : flex;
    flex-direction : row;
    justify-content: space-around;
    align-items: center;
    margin-top : 3vh;
    margin-bottom: 3vh;
}
}



@media screen and (max-width:767px){
  .title{
    padding : 2%;
    margin-right : 60%;
    font-family : Valorant;
    font-size : 7vw;
    color :  #111;
    margin :0;
    padding : 0;
    
}

  .img-header{
    width : 100%;
    height : 30vh;
    background-size : cover;
    background-position: center;
}

input{
  width: 80%;
  border: 0;
  border-bottom: 1px solid #878582;
  outline: 0;
  font-size: 2.7vw;
  color: #878582;
  padding: 1v 0;
  background: transparent;
}

/*Style the title and search bar of every pages*/
.header-section {
    display : flex;
    flex-direction : row;
    justify-content: space-around;
    align-items: center;
    margin-top : 3vh;
    margin-bottom: 3vh;
}
}




</style>

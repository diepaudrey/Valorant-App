<template>
    <div class="card">
        <img class="background" v-bind:src="imgUrl"/>
        <h2 class="cardName">  {{cardName}} </h2>
    </div>

</template>

<script>
    export default {
    name: 'NavCard',
    props: {
        routerLink : String,
        cardName : String,
        imgUrl : {type : String, default : "https://media.valorant-api.com/sprays/fd92bdcd-4ae8-861e-843a-05a8113a4d11/fulltransparenticon.png"}
    }

}
</script>


<style scoped>
@media screen and (min-width:1024px){
    .background{
    position : absolute;
    height : 100%;
    width : 100%;
    object-fit : cover;
}


.card{
    height : 15vw;
    width : 15vw;
    position : relative;

    display :flex;
    justify-content : center;
    align-items : center;

    margin : 1%;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  
  text-decoration: none;
  z-index: 1;
}


.cardName {
  color:  #ECE8E1;
  margin :0;
  font-size : 2vw;
  font-family : Valorant;
  text-decoration: none;
  z-index: 2;
}

a{
    color : white;
    text-decoration :none;
}

a:hover{
    text-decoration : none;
}

}

@media screen and (min-width: 767px) and (max-width:1023px){
.background{
    position : absolute;
    height : 100%;
    width : 100%;
    object-fit : cover;
}


.card{
    height : 25vw;
    width : 25vw;
    position : relative;
    display :flex;
    justify-content : center;
    align-items : center;
    margin : 1%;
    z-index: 0;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  
  text-decoration: none;
  z-index: 1;
}


.cardName {
  color:  #ECE8E1;
  margin :0;
  font-size : 3vh;
  font-family : Valorant;
  text-decoration: none;
  z-index: 2;
}

a{
    color : white;
    text-decoration :none;
}

a:hover{
    text-decoration : none;
}

}

@media screen and (max-width: 767px){
    .background{
    position : absolute;
    height : 100%;
    width : 100%;
    object-fit : cover;
}


.card{
    height : 30vw;
    width : 30vw;
    position : relative;

    display :flex;
    justify-content : center;
    align-items : center;

    margin : 1vw;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  
  text-decoration: none;
  z-index: 1;
}


.cardName {
  color:  #ECE8E1;
  margin :0;
  font-size : 4vw;
  font-family : Valorant;
  text-decoration: none;
  z-index: 2;
}

a{
    color : white;
    text-decoration :none;
}

a:hover{
    text-decoration : none;
}

}


</style>
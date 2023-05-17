<template>
    <div class="map-card">
        <div class="info-container">
            <h2 class="map-name"> {{mapName}} </h2>
            <div class="map-img" v-bind:style="{ 'background-image': 'url(' + mapImg + ')' }"></div>
        </div>
    </div>

</template>

<script>
    export default {
    name: 'MapCard',
    props:{
        mapName : String,
        mapImg : {type : String, default : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt962a6518612d78db/6131a93da9655d098c7cd8f0/09082021-Episode-3-Act-II-Overview-Article-Banner.jpg"}
    }
}


</script>

<style scoped>
@media screen and (min-width:1024px){
.info-container {
    height: 40vh;
    width : 100%;

    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content: space-evenly;

    margin: 0 auto;
    

}
.map-card{
    border : 1px solid #BDBAB4;
    width: 70vw; 
    height: auto;
    margin: 0 auto;
    padding: 10px;
    color : #111;
}

.map-card:hover{
    -webkit-transition: color 0.5s;
    transition: color 0.8s;
    color: var(--red);
    font-weight: bold;
    border : 1px solid var(--red);
}
.map-img{
    width : 100%;
    height : 30vh;
    background-size: cover;
    background-position: top 40% center;
}

.map-name{
    font-family: Valorant;
    font-size: 2em;
    
    margin:0;
}
}


@media screen and (min-width: 767px) and (max-width:1023px){
    .info-container {
    height: 40vh;
    width : 100%;

    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content: space-evenly;

    margin: 0 auto;
    color : #111;

}
.map-card{
    border : 1px solid #BDBAB4;

    width: 80vw; 
    height: auto;
    margin: 0 auto;
    padding: 10px;
}
.map-img{
    width : 100%;
    height : 30vh;
    background-size: cover;
    background-position: top 40% center;
}

.map-card:hover{
    -webkit-transition: color 0.5s;
    transition: color 0.8s;
    color: var(--red);
    font-weight: bold;
    border : 1px solid var(--red);
}

.map-name{
    font-family: Valorant;
    font-size: 1.5em;
    margin:0;
}
}


@media screen and (max-width:767px){
    .info-container {
    height: 30vh;
    width : 100%;

    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content: space-evenly;

    margin: 0 auto;
    color : #111;

}
.map-card{
    border : 1px solid #BDBAB4;

    width: 90vw; 
    height: auto;
    margin: 0 auto;
    padding: 10px;
}
.map-img{
    width : 100%;
    height : 20vh;
    background-size: cover;
    background-position: top 40% center;
}

.map-name{
    font-family: Valorant;
    font-size: 5vw;
    margin:0;
}
.map-card:hover{
    -webkit-transition: color 0.5s;
    transition: color 0.8s;
    color: var(--red);
    font-weight: bold;
    border : 1px solid var(--red);
}
}



</style>
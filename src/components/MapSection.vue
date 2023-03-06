<template>
    <section class="mapSection">

        <div class="map-container"></div>

        <div class="infoContainer">
            <h1 class="title"> Cartes </h1>

            <div class="mapCards">
                <MapCard mapName="Lotus"/>
                <MapCard mapName="Ascent"/>
            </div>

        </div>

    </section>

</template>

<script>
import MapCard from './MapCard.vue'

    export default {
        name : 'MapSection',
        components : {
            MapCard,
        }
    }
</script>


<style>

.mapCards{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.map-container {
   width : 100 vw;
    height : 70vh;
    background-image : url("https://cdn.oneesports.gg/cdn-data/2023/01/Valorant_Lotus_Episode6ActI_Map_4.jpg");
    background-size : cover;
}

img{
    object-fit : cover;
   
}

.title{
    padding : 2%;
    margin-right : 60%;
    font-family : Valorant;
    font-size : 4em;
    color :  #111;
}

</style>
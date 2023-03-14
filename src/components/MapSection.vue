<template>
    <section class="mapSection">

        <div class="map-img"></div>

        <div class="infoContainer">
            <h2 class="title"> Cartes </h2>

            <div class="mapCards" v-for="(map,index) in maps" :key="index">
                <MapCard :mapName="map.displayName" :mapImg="map.splash"/>
                
            </div>

        </div>

    </section>

</template>

<script>
import MapCard from './MapCard.vue'

import { getMapsData } from '@/services/api/weaponsAPI';

    export default {
        name : 'MapSection',
        components : {
            MapCard,
        },

        data(){
            return {
                maps : []
            };
        },

        created(){
            this.getMaps();
        },

        methods:{
            getMaps(){
                this.maps = getMapsData();
                this.maps.then((result) => this.maps = result.data)

            }
        }


    }
</script>


<style scoped>

.mapCards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom:2em;
}

.map-img {
    width : 100 vw;
    height : 70vh;
    background-image : url("https://cdn.oneesports.gg/cdn-data/2023/01/Valorant_Lotus_Episode6ActI_Map_4.jpg");
    background-size : cover;
}

img{
    object-fit : cover;
   
}

/* .title{
    margin-bottom :0;
    margin-right : 60%;
    font-family : Valorant;
    font-size : 4em;
    color :  #111;
} */

</style>
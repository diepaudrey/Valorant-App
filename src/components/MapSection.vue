<template>
    <section class="mapSection">

        <div class="map-img"></div>

        <div class="infoContainer">
            <div class="header-section">
                <h2 class="title"> Cartes </h2>

                <div class="search-bar">
                    <input type="text" v-model="search" placeholder="Chercher une carte">
                    <label for="map-sort"> Trier par : </label>
                    <select v-model="mapsSortType" id="map-sort">
                        <option value="AZName">Trier par ordre alphabetique</option>
                    </select>
                </div>
            </div>
            

            <div class="map-cards" v-for="(map,index) in maps" :key="index">
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
                maps : [],
                search: "",
                mapsSortType: "AZName"
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
.header-section {
    display : flex;
    flex-direction : row;
    justify-content: space-around;
    align-items: center;
    margin-top : 40px;
}

.map-cards{
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

.title{
    margin :0;
}

</style>
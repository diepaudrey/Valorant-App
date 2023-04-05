<template>
    <section class="mapSection">

        <div class="map-img"></div>

        <div class="infoContainer">
            <div class="header-section">
                <h2 class="title"> Cartes </h2>

                <div class="search-bar">
                    <input type="text" v-model="search" placeholder="Chercher une carte">
                    
                </div>

            </div>
            

            <div class="map-cards">
                <MapCard
                v-for="map in filteredMaps" 
                :key="map.displayName"
                :mapName="map.displayName" 
                :mapImg="map.splash"/>
                
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
                // mapsSortType: "AZName"
            };
        },

        created(){
            this.getMaps();
        },

        
        computed: {
            filteredMaps() {
                // console.log(this.maps);
                return this.maps.filter(map => {return map.displayName.toLowerCase().includes(this.search.toLowerCase())})
            }

        },

        methods:{
            getMaps(){
                const promise = getMapsData();
                //by default sort in AZname 
                const comparator = (a,b)=> a.displayName.localeCompare(b.displayName);
                promise.then((result) => this.maps = result.data.sort(comparator));
            },

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
<template>
    <section class="map-section">

        <div class="img-header" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></div>

        <div class="main-content">
            <div class="header-section">
                <h1 class="title"> Cartes </h1>

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
                headerImg: require('../assets/map_lotus.png')
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


<template>
    <section class="map-section">

        <div class="img-header" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></div>

        <div class="main-content">
            <div class="header-section">
                <h1 class="title"> Cartes </h1>


                <ModalCard v-if="selectedMap" :map="selectedMap" v-on:close="selectedMap = null" ></ModalCard>

                <div class="search-sort-container">
                    <div class="search-bar">
                            <input type="text" v-model="searchMap" placeholder="Chercher une carte">
                    </div>

                        <label for="map-sort">Trier par : </label>
                        <select v-model="sortBy" id="map-sort">
                            <option value="AZName">Noms de A à Z</option>
                            <option value="ZAName">Noms de Z à A</option>
                        </select>
            
                </div>

            </div>
            

            <div class="map-cards" v-for="map in filteredMaps" :key="map.displayName">
                <MapCard @click="selectMap(map)"
                :mapName="map.displayName" 
                :mapImg="map.splash"/>
                
            </div>

        </div>

    </section>

</template>

<script>
import MapCard from './MapCard.vue'
import ModalCard from './ModalMap.vue'

import { getMapsData } from '@/services/api/weaponsAPI';

    export default {
        name : 'MapSection',
        components : {
            MapCard, 
            ModalCard, 
        },
       

        watch: {
            searchMaps: function(newSearch){
                localStorage.setItem("searchMap", newSearch)
            },
            sortBy: function(newSort){
                localStorage.setItem("sort", newSort)
            },
        },

        data(){
            return {
                maps : [],
                searchMap: localStorage.getItem("searchMap") || "",
                sortBy: localStorage.getItem("sort") || "AZName",
                headerImg: require('../assets/map_lotus.png'),
                selectedMap:  null
            };
        },

        created(){
            this.getMaps();
        },

        
        computed: {
        
            filteredMaps(){
                let tempMaps  = this.maps
                
                //search bar
                if(this.searchMap != '' && this.searchMap){
                    tempMaps =  tempMaps.filter(map => {return map.displayName.toLowerCase().includes(this.searchMap.toLowerCase())})
                }

                //sort by
                if(this.sortBy == 'AZName'){
                    tempMaps = tempMaps.sort((a,b)=> a.displayName.localeCompare(b.displayName))
                    
                }
                else if(this.sortBy =='ZAName'){
                    tempMaps = tempMaps.sort((a,b)=> b.displayName.localeCompare(a.displayName))
                }
                
                return tempMaps
            }

        },

        methods:{
            getMaps(){
                const promise = getMapsData();
                //by default sort in AZname 
                const comparator = (a,b)=> a.displayName.localeCompare(b.displayName);
                promise.then((result) => this.maps = result.data.sort(comparator));
            },

            selectMap(map){
                
                if(map.displayName == "Entraînement"){
                    
                    this.selectedMap = null
                }
                else{
                    this.selectedMap = map
                }
                
            },

        }


    }
</script>


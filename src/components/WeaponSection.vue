<template>
    <section class="weapon-section">
        <div class="img-header" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></div>

        <div class="infoContainer">
            
            <div class="header-section">
                <h1 class="title"> Arsenal </h1>

                <div class="search-bar">
                        <input type="text" v-model="search" placeholder="Chercher une arme">
                        
                </div>
            </div>
            
            <!-- <h3 class="weapon-type"> Type d'arme </h3> -->
            <div class="weapon-cards" v-for="(weapon, index) in weapons" :key="index">
                <WeaponCard class="weapon-card" :weaponName="weapon.displayName" :weaponImg="weapon.displayIcon" />
            </div>
        </div>
    </section>
</template>

<script>
 /* eslint-disable */
import WeaponCard from './WeaponCard.vue'
import { getWeaponsData } from '@/services/api/weaponsAPI.js'
import { getSkinsWeaponsData } from '@/services/api/weaponsAPI.js'

    export default{
        name : 'WeaponSection',
        components : {
            WeaponCard,

        },
        data(){
            return {
                weapons : [],
                skinsWeapons : [],
                search : "",
                headerImg : require('../assets/arsenal.png')
            };
        },

        created(){
            this.getWeapons();
            this.getSkinsWeapon();
            //this.randomSkin();
        },

        computed: {
            // filteredWeapons() {
            //     // console.log(this.maps);
            //     return this.weapons.filter(weapon => {return weapon.displayName.toLowerCase().includes(this.search.toLowerCase())})
            // }
        },

        methods : {
            getWeapons(){
                const promise = getWeaponsData();
                const comparator = (a,b)=> a.category.localeCompare(b.category);
                promise.then((result) => this.weapons = result.data.sort(comparator));
            
            },

            getSkinsWeapon(){
                const promise = getSkinsWeaponsData();
                const comparator = (a,b)=> a.displayName.localeCompare(b.displayName);
                promise.then((result) => this.skinsWeapons = result.data.sort(comparator));
                console.log(this.skinsWeapons);
            },

            // randomSkin(){
            //     for(let skin of this.skinsWeapons){
            //         console.log(skin.displayIcon);
            //     }
   
            // }
        }
        
    }
</script>

<style scoped>

@media screen and (min-width: 1024px) {
.top-section{
    margin-top : 40px;
    margin-bottom : 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.weapon-section{
    overflow : hidden;
}



.weapon-cards{
    display : flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content : center;
    margin-bottom : -1px;
}

}

@media screen and (min-width: 767px) and (max-width:1023px){
    .top-section{
    margin-top : 40px;
    margin-bottom : 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.weapon-section{
    overflow : hidden;
}



.weapon-cards{
    display : flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content : center;
    margin-bottom : -1px;
}

.title{
    margin :0;
}
}


@media screen and (max-width: 767px) {
    .top-section{
    margin-top : 40px;
    margin-bottom : 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.weapon-section{
    margin-bottom : 50px;
}



.weapon-cards{
    display : flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content : center;
    margin-bottom : -1px;
}

.title{
    margin :0;
}
}


</style>
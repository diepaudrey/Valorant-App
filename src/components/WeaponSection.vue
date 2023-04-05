<template>
    <section class="weapon-section">
        <div class="img-box"></div>

        <div class="infoContainer">
            
            <div class="top-section">
                <h2 class="title"> Arsenal </h2>

                <div class="search-bar">
                        <input type="text" v-model="search" placeholder="Chercher une arme">
                        
                </div>
            </div>
            
            <!-- <h3 class="weapon-type"> Type d'arme </h3> -->
            <div class="weapon-cards" v-for="(weapon, index) in filteredWeapons" :key="index">
                <WeaponCard class="weapon-card" :weaponName="weapon.displayName" :weaponImg="weapon.displayIcon" />
            </div>
        </div>
    </section>
</template>

<script>
 /* eslint-disable */
import WeaponCard from './WeaponCard.vue'
import { getWeaponsData } from '@/services/api/weaponsAPI.js'

    export default{
        name : 'WeaponSection',
        components : {
            WeaponCard,

        },
        data(){
            return {
                weapons : [],
                search : ""
            };
        },

        created(){
            this.getWeapons();
        },

        computed: {
            filteredWeapons() {
                // console.log(this.maps);
                return this.weapons.filter(weapon => {return weapon.displayName.toLowerCase().includes(this.search.toLowerCase())})
            }
        },

        methods : {
            getWeapons(){
                const promise = getWeaponsData();
                const comparator = (a,b)=> a.category.localeCompare(b.category);
                promise.then((result) => this.weapons = result.data.sort(comparator));
            
            }
        }
        
    }
</script>

<style scoped>

@media screen and (max-width: 960px) {
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

.img-box{
    width: 100vw;
    height: 70vh;
    background-image: url("../assets/Arsenal-img.png");
    background-size: cover;
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
    overflow : hidden;
}

.img-box{
    width: 100vw;
    height: 70vh;
    background-image: url("../assets/Arsenal-img.png");
    background-size: cover;
}


.weapon-cards{
    margin-bottom : -1px;
}

.title{
    margin :0;
}
}


</style>
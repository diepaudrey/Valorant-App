<template>
    <section class="weapon-section">
        <div class="img-box"></div>

        <div class="infoContainer">
            <h2 class="title"> Arsenal </h2>
            <h3 class="weapon-type"> Type d'arme </h3>
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

    export default{
        name : 'WeaponSection',
        components : {
            WeaponCard,

        },
        data(){
            return {
                weapons : []
            };
        },

        created(){
            this.getWeapons();
        },

        methods : {
            getWeapons(){
                this.weapons = getWeaponsData();
                this.weapons.then((result) => this.weapons = result.data, console.log(this.weapons))
            
            }
        }
        
    }
</script>

<style scoped>


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
    flex-wrap: wrap;
    justify-content : center;
    margin-bottom : 50px;
}



</style>
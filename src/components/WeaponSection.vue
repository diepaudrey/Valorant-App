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
                <WeaponCard @click="selectWeapon(index)" class="weapon-card" :weaponName="weapon.displayName" :weaponImg="weapon.displayIcon" />
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
                headerImg : require('../assets/arsenal.png'),
                selectedWeapon : null,
                indexSkin : 0,
                
            };
        },

        created(){
            this.getWeapons();
            this.getSkinsWeapon();
            // this.randomSkin();

           
            
        },

        computed: { 
        },

        methods : {
            getWeapons(){
                const promise = getWeaponsData();
                const comparator = (a,b)=> a.category.localeCompare(b.category);
                promise.then((result) => this.weapons = result.data.sort(comparator));
            
            },

            getSkinsWeapon(){
                const promise = getSkinsWeaponsData();
                promise.then((result) =>  this.skinsWeapons = result.data);
            },

            selectWeapon(index) {
                this.selectedWeapon = this.weapons[index].displayName.split(' ')[0];
                this.weapons[index].displayIcon = this.randomSkin().displayIcon;
                this.weapons[index].displayName = this.randomSkin().displayName;
            },

            randomSkin(){
                this.indexSkin++
                const weaponName = this.selectedWeapon.toString()
                console.log("weap name : ", weaponName)
                const skinsWeapon = this.skinsWeapons.filter(skin => skin.displayName.startsWith(weaponName) && skin.displayIcon != null && skin.displayName!=null)
                const randSkin = skinsWeapon[this.indexSkin]
                return {
                    displayName: randSkin.displayName,
                    displayIcon: randSkin.displayIcon
                };
   
            },


        
        
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
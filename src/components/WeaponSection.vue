<template>
    <section class="weapon-section">
        <div class="img-header" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></div>

        <div class="infoContainer">
            
            <div class="header-section">
                <h1 class="title"> Arsenal </h1>

                <div class="search-bar">
                        <input type="text" v-model="search" placeholder="Chercher une arme">
                        <label for="agent-sort">Trier par : </label>
                        <select v-model="sortBy" id="agent-sort">
                            <option value="AZName">Noms de A à Z</option>
                            <option value="ZAName">Noms de Z à A</option>
                        </select>

                        <!-- <select v-model="category" id="agent-sort">
                            <option value="Armes de poing">Armes de poing</option>
                            <option value="ZAName">Noms de Z à A</option>
                            <option value="AZCategory">Catégories de A à Z</option>
                            <option value="ZACategory">Catégories de Z à A</option>
                        </select> -->
                        <!-- <button type="button" id="refresh-button" @click="refresh = true">Skins de base</button> -->  
                </div>

                <div class="weapons-checkboxes">
                    <input type="checkbox" id="heavy-weapons" value="Heavy Weapons" name="heavy-weapons" v-model="categories">
                    <label for="heavy-weapons"> Armes lourdes</label>

                    <input type="checkbox" id="sidearms" value="Pistols" name="sidearms" v-model="categories">
                    <label for="sidearms"> Armes de poing </label>

                    <input type="checkbox" id="smgs" value="SMGs" name="smgs" v-model="categories">
                    <label for="smgs"> Pistolets mitrailleurs </label>

                    <input type="checkbox" id="shotguns" value="Shotguns" name="shotguns" v-model="categories">
                    <label for="shotguns"> Fusils à pompe </label>

                    <input type="checkbox" id="rifles" value="Rifles" name="rifles" v-model="categories">
                    <label for="rifles"> Fusils mitrailleurs </label>

                    <input type="checkbox" id="sniper-rifles" value="Sniper Rifles" name="sniper-rifles" v-model="categories">
                    <label for="sniper-rifles"> Snipers </label>

                    <!-- <input type="checkbox" id="machine-guns" value="Machine Guns" name="machine-guns" v-model="categories">
                    <label for="machine-guns"> Mitrailleuses lourdes </label> -->

                    <input type="checkbox" id="melee" value="EEquippableCategory::Melee" name="melee" v-model="categories">
                    <label for="melee"> Mêlée </label>


                    <span> {{ categories }}</span>

                </div>
            </div>
            
            <!-- <h3 class="weapon-type"> Type d'arme </h3> -->
            
            <div class="weapon-cards" v-for="(weapon, index) in filteredWeapons" :key="index">
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
                sortBy : "AZName",
                categories : [],
                headerImg : require('../assets/arsenal.png'),
                selectedWeapon : null,
                refresh : false,
                
            };
        },

        created(){
            this.getWeapons();
            this.getSkinsWeapon();
        },

        computed: { 
            filteredWeapons(){
                let tempWeapons  = this.weapons

                //search bar
                if(this.search != '' && this.search){
                    tempWeapons =  tempWeapons.filter(weapon => {return weapon.displayName.toLowerCase().includes(this.search.toLowerCase())})
                }


                //sort by
                if(this.sortBy == 'AZName'){
                    tempWeapons = tempWeapons.sort((a,b)=> a.displayName.localeCompare(b.displayName))
                }
                else if(this.sortBy =='ZAName'){
                    //tempWeapons = tempWeapons.reverse()
                    tempWeapons = tempWeapons.sort((a,b)=> b.displayName.localeCompare(a.displayName))
                }


                if (this.categories.length > 0) {
                    //special case for the melee weapon that dont have .shopData 
                    if(this.categories.includes("EEquippableCategory::Melee")){
                        tempWeapons = tempWeapons.filter(weapon => {if(weapon.shopData!=null) { return this.categories.includes(weapon.shopData.category)} else{
                            return weapon.category == "EEquippableCategory::Melee"
                        }});
                    }
                    else{
                        tempWeapons = tempWeapons.filter(weapon => {if(weapon.shopData!=null) { return this.categories.includes(weapon.shopData.category)}});
                    }
                }
                
                return tempWeapons
            }
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

            //Display a new skin
            selectWeapon(index) {
                //only take the name of the weapon, without extra info
                this.selectedWeapon = this.filteredWeapons[index].displayName.split(' ')[0];

                //the new skin weapon to display
                const randSkinObj = this.randomSkin();

                //change the current name and image of the weapon showed
                this.filteredWeapons[index].displayIcon = randSkinObj.displayIcon;
                this.filteredWeapons[index].displayName = randSkinObj.displayName;
            },

            randomSkin(){
                //transform the selected weapon to string
                const weaponName = this.selectedWeapon.toString()

                //filter the array of all skins of all weapons to only keep the skins of the weapon selected
                const skinsWeapon = this.skinsWeapons.filter(skin => skin.displayName.startsWith(weaponName) && skin.displayIcon != null && skin.displayName!=null)

                //random int according to the length of the array
                const randInt = Math.floor(Math.random() * skinsWeapon.length)


                const randSkin = skinsWeapon[randInt]
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
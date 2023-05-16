<template>
    <section class="weapon-section">
        <div class="img-header" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></div>

        <div class="infoContainer">
            
            <div class="header-section">
                <h1 class="title"> Arsenal </h1>

                <div class="search-sort-container">
                    <div class="search-bar"> 
                        <input type="text" v-model="searchWeapon" placeholder="Chercher une arme">
                    </div>
                        <label for="weapon-sort">Trier par : </label>
                        <select v-model="sortBy" id="weapon-sort">
                            <option value="AZName">Noms de A à Z</option>
                            <option value="ZAName">Noms de Z à A</option>
                            <option value="AZCategory">Catégories de A à Z</option>
                            <option value="ZACategory">Catégories de Z à A</option>
                        </select>  
                </div>

                <!-- <WeaponsCheckbox :weaponsCategory="this.weapons.category"/> -->
            </div>

            <div class="container-checkboxes">
                    <div class="weapon-checkbox">
                        <input class="checkbox" type="checkbox" id="heavy-weapons" value="Heavy Weapons" name="heavy-weapons" v-model="categories">
                        <label for="heavy-weapons"> Armes lourdes</label>
                    </div>
                   
                    <div class="weapon-checkbox">
                        <input class="checkbox" type="checkbox" id="sidearms" value="Pistols" name="sidearms" v-model="categories">
                        <label for="sidearms"> Armes de poing </label>
                    </div>
                    
                    <div class="weapon-checkbox">
                        <input class="checkbox" type="checkbox" id="smgs" value="SMGs" name="smgs" v-model="categories">
                        <label for="smgs"> Pistolets mitrailleurs </label>
                    </div>


                    <div class="weapon-checkbox">
                        <input class="checkbox" type="checkbox" id="shotguns" value="Shotguns" name="shotguns" v-model="categories">
                        <label for="shotguns"> Fusils à pompe </label>
                    </div>
                    

                    <div class="weapon-checkbox">
                        <input class="checkbox" type="checkbox" id="rifles" value="Rifles" name="rifles" v-model="categories">
                        <label for="rifles"> Fusils mitrailleurs </label>
                    </div>
                    

                    <div class="weapon-checkbox">
                        <input class="checkbox" type="checkbox" id="sniper-rifles" value="Sniper Rifles" name="sniper-rifles" v-model="categories">
                        <label for="sniper-rifles"> Snipers </label>
                    </div>
                    

                    <div class="weapon-checkbox">
                        <input class="checkbox" type="checkbox" id="melee" value="EEquippableCategory::Melee" name="melee" v-model="categories">
                        <label for="melee"> Mêlée </label>
                    </div>


                </div>
            
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
        watch: {
            searchWeapon: function(newSearch){
                console.log("search : ", newSearch)
                localStorage.setItem("searchWeapon", newSearch)
            },
            sortBy: function(newSort){
                localStorage.setItem("sort", newSort)
            },
            categories: function(newCategories){
                let string = JSON.stringify(this.categories)
                localStorage.setItem("categoriesSelected", string)
            },

        },
        data(){
            return {
                weapons : [],
                skinsWeapons : [],
                searchWeapon: localStorage.getItem("searchWeapon") || "",
                sortBy: localStorage.getItem("sort") || "AZName",
                categories : JSON.parse(localStorage.getItem("categoriesSelected")) || [],
                headerImg : require('../assets/arsenal.png'),
                selectedWeapon : null,
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
                if(this.searchWeapon != '' && this.searchWeapon){
                    tempWeapons =  tempWeapons.filter(weapon => {return weapon.displayName.toLowerCase().includes(this.searchWeapon.toLowerCase())})
                }


                //sort by
                if(this.sortBy == 'AZName'){
                    tempWeapons = tempWeapons.sort((a,b)=> a.displayName.localeCompare(b.displayName))
                }
                else if(this.sortBy =='ZAName'){
                    tempWeapons = tempWeapons.sort((a,b)=> b.displayName.localeCompare(a.displayName))
                }
                else if(this.sortBy == 'AZCategory'){
                tempWeapons = tempWeapons.sort((a,b)=> a.category.localeCompare(b.category))
                }
                else if(this.sortBy =='ZACategory'){
                    tempWeapons = tempWeapons.sort((a,b)=> b.category.localeCompare(a.category))
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
                this.selectedWeapon = this.filteredWeapons[index]
            
                //the new skin weapon to display
                const randSkinObj = this.randomSkin(index)

                //change the current name and image of the weapon showed
                this.filteredWeapons[index].displayIcon = randSkinObj.displayIcon
                this.filteredWeapons[index].displayName = randSkinObj.displayName
            },

            randomSkin(index){

                //transform the selected weapon name to string
                const weaponName = this.selectedWeapon.displayName.split(' ')[0].toString()
                //boolean to tell if the selected weapon is Melee
                const isMelee = this.selectedWeapon.assetPath.includes("Melee")

                //special case, because Melee skins don't all start with "Melee"
                if(isMelee){
                    //filter the array of all skins of all weapons to only keep the skins of the weapon selected
                    const skinsWeapon = this.skinsWeapons.filter(skin => skin.assetPath.includes("Melee") && skin.displayIcon != null && skin.displayName!=null)
                    //random int according to the length of the array
                    const randInt = Math.floor(Math.random() * skinsWeapon.length)

                    const randSkin = skinsWeapon[randInt]
                    return {
                        displayName: randSkin.displayName,
                        displayIcon: randSkin.displayIcon
                    };
                }
                else{
                    //filter the array of all skins of all weapons to only keep the skins of the weapon selected
                    const skinsWeapon = this.skinsWeapons.filter(skin => skin.displayName.startsWith(weaponName) && skin.displayIcon != null && skin.displayName!=null)

                    //random int according to the length of the array
                    const randInt = Math.floor(Math.random() * skinsWeapon.length)


                    const randSkin = skinsWeapon[randInt]
                    return {
                        displayName: randSkin.displayName,
                        displayIcon: randSkin.displayIcon
                    };
                }
                
   
            },

            



        
        
    }
    }

    
</script>

<style scoped>

@media screen and (min-width: 1024px) {

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

/*-----style for checkboxes-------*/
.container-checkboxes{
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin : 20px;
}
.weapon-checkbox{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.checkbox{
    width : 15px;
    height : 15px;
}

.search-sort-container{
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


}

@media screen and (min-width: 767px) and (max-width:1023px){

.container-checkboxes{
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin : 20px;
}
.weapon-checkbox{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.checkbox{
    width : 15px;
    height : 15px;
}


.weapon-cards{
    display : flex;
    flex-direction: row;
    justify-content : center;
    margin-bottom : -1px;
}

.title{
    margin :0;
}
}


@media screen and (max-width: 767px) {

.header-section{
    height: 100px;
    margin-left : 20px;
    display : flex;
    flex-direction: column;
    align-items: start;
}
    .container-checkboxes{
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin : 20px;
}
.weapon-checkbox{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.checkbox{
    width : 15px;
    height : 15px;
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
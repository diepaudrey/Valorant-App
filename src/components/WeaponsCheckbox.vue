<template>
    <div class="weapons-checkboxes">
        <input type="checkbox" id="heavy-weapons" value="EEquippableCategory::Heavy" name="heavy-weapons" v-model="categories">
        <label for="heavy-weapons"> Armes lourdes</label>

        <input type="checkbox" id="sidearms" value="EEquippableCategory::Sidearm" name="sidearms" v-model="categories">
        <label for="sidearms"> Armes de poing </label>

        <input type="checkbox" id="smgs" value="EEquippableCategory::SMG" name="smgs" v-model="categories">
        <label for="smgs"> Pistolets mitrailleurs </label>

        <input type="checkbox" id="shotguns" value="EEquippableCategory::Shotgun" name="shotguns" v-model="categories">
        <label for="shotguns"> Fusils à pompe </label>

        <input type="checkbox" id="rifles" value="EEquippableCategory::Rifle" name="rifles" v-model="categories">
        <label for="rifles"> Fusils mitrailleurs </label>

        <input type="checkbox" id="sniper-rifles" value="EEquippableCategory::Sniper" name="sniper-rifles" v-model="categories">
        <label for="sniper-rifles"> Snipers </label>

        <!-- <input type="checkbox" id="machine-guns" value="Machine Guns" name="machine-guns" v-model="categories">
        <label for="machine-guns"> Mitrailleuses lourdes </label> -->

        <input type="checkbox" id="melee" value="EEquippableCategory::Melee" name="melee" v-model="categories">
        <label for="melee"> Mêlée </label>


        <span> {{ categories }}</span>

        </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'WeaponCheckbox',
        props : {
            weaponsCategory : String,
        },
        data(){
            return{
                categories: []
            }
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
                    tempWeapons = tempWeapons.filter(weapon => { return this.categories.includes(this.weaponsCategory)});
                }
    
                
                return tempWeapons
            }
            

    }
}


</script>

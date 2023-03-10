<template> 
    <div class="container">
        <div class="weapon-box">
            <img class="weapon-img" v-bind:src="weaponImg" alt="Weapon image" >
            <p class="weapon-name"> {{weaponName}} </p>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import { getWeaponsData } from '@/services/api/weaponsAPI.js'

    export default {
        name: 'WeaponCard',
        props : {
            weaponName : String,
            weaponImg : String,
        } 

    
        

    }


</script>


<style scoped>

.container{
    width: 100%;
    height: 100%;
    display : flex;
   
}


.weapon-box{
    flex: 49%;
    width: 400px;
    height: 250px;
    /* height: v-bind(test)px; */
    border : 1px solid #BDBAB4;

}

.weapon-img {
    height: 50%;
    width : auto;
}




</style>
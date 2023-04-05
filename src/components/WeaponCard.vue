<template> 
    <!-- <div class="container"> -->
        <div class="weapon-box">
            <img class="weapon-img" v-bind:src="weaponImg" alt="Weapon image" >
            <p class="weapon-name"> {{weaponName}} </p>
        </div>
    <!-- </div> -->
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
@media screen and (max-width: 960px) {
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

.weapon-name{
    font-size: 1.5em;
    color: #111;
}

}


@media screen and (max-width: 767px) {
/* .container{
    width: 50vw;
    height: 10vh;
    display : flex;

} */


.weapon-box{
    display : flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;

    width: 150px;
    height: 150px;
    /* border : 1px solid #BDBAB4; */
    

}

.weapon-img {
    height: auto;
    width :150px;
    
}

.weapon-name{
    font-size: 0.8em;
    color: #111;
}

}




</style>
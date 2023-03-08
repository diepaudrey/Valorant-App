<template> 
    <div class="weapon-box">
        <img alt="Vandal" src="https://vgraphs.com/images/weapons/valorant-vandal-profile-icon.png">
        <h2 class="weapon-name"> {{weaponName}} </h2>
    </div>
</template>

<script>
    export default {
    name: 'WeaponCard',
    props:{
        weaponName : String,
        weaponUrl : {type : String, default : "https://vgraphs.com/images/weapons/valorant-vandal-profile-icon.png"}
        

    },
    // data(){
    //     return {test:60}
    // }

    
}
</script>


<style scoped>



.weapon-box{
    width: 400px;
    height: 250px;
    /* height: v-bind(test)px; */
    border : 1px solid #BDBAB4;

}

img {
    height: auto%;
    width: 100%;
}

h2 {
  color: #111;
  margin :0;
}


</style>
<template> 
    <div class="container">
        <div class="weapon-box" v-for="(weapon, index) in weapons" :key="index">
            <img class="weapon-img" :src="weapon.displayIcon" alt="Vandal" >
            <p class="weapon-name"> {{weapon.displayName}} </p>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'WeaponCard',
    props:{
        weaponName : String,
        weaponUrl : {type : String, default : "https://vgraphs.com/images/weapons/valorant-vandal-profile-icon.png"}
        

    },

    data(){
        return {
            weapons : []
        };
    },

    created(){
        this.getWeapons();
    },

    methods :{
        async getWeapons(){

            try{
                const response = await fetch("https://valorant-api.com/v1/weapons");
                const data = await response.json();
                this.weapons = data.data;
            }
            catch(error){
                console.log(error);
            }
        }
    }

    
}
</script>


<style scoped>

.container{
    width: 100%;
    height: 100%;
    
    display : flex;
    flex-direction: row;
    flex-wrap: wrap;
}


.weapon-box{
    flex: 50%;
    width: 400px;
    height: 250px;
    /* height: v-bind(test)px; */
    border : 1px solid #BDBAB4;

}

.weapon-img {
    height: auto%;
    width : 50%;
}




</style>
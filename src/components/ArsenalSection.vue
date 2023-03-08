<template>
    <section>
        <div class="img-box">
            <img class="background-img" src="../assets/Arsenal-img.png">  
        </div>

        <div class="infoContainer">
            <h2 class="title"> Arsenal </h2>
            <h3 class="weapon-type"> Armes de poing </h3>

            <div class="weapon-cards">
                <WeaponCard weaponName="Vandal"/>
                <WeaponCard weaponName="Phantom"/>
            </div>
        </div>
    </section>
</template>

<script>
import WeaponCard from './WeaponCard.vue'

    export default{
        name : 'ArsenalSection',
        components : {
            WeaponCard,
        }
        
    }
</script>

<style scoped>

.img-box{
    width: 100vw;
    height: 70vh;
}

.background-img{
    width: 100vw;
    height: 70vh;
    object-fit : cover;

}



.weapon-cards{
    display : flex;
    flex-direction : row;
    justify-content : center;
    margin-bottom : 50px;
}


</style>
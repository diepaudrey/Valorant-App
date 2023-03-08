<template>
    <section class="weapon-section">
        <div class="img-box"></div>

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
        name : 'WeaponSection',
        components : {
            WeaponCard,
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
    flex-direction : row;
    justify-content : center;
    margin-bottom : 50px;
}


</style>
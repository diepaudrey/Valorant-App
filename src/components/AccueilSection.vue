<template> 
    <section class = "main-section">
        <div class="img"></div>

        <div class="accueil-content">
            <h1 class="title"> Presentation </h1>

            <div class="text-presentation">
                <p> Ce site a été crée dans le cadre d’un projet étudiant au cours de la formation IMAC. 
                Il utilise <a href="https://valorant-api.com/" target="_blank">l’API Valorant</a> et regroupe les principaux éléments du jeu. </p>
            </div>

            <div class="navCards">
                <NavCard cardName = "Agent" imgUrl="https://www.gamewallpapers.com/wallpapers_slechte_compressie/01wallpapers/wallpaper_valorant_01_1920x1080.jpg"/>

                <NavCard cardName = "Cartes" imgUrl="https://media.discordapp.net/attachments/1075396207968534580/1082306634912645230/lotus_loadingscreen_p1.png?width=1191&height=670"/>

                <NavCard cardName = "Arsenal" imgUrl="https://media.discordapp.net/attachments/1075396207968534580/1082306634912645230/lotus_loadingscreen_p1.png?width=1191&height=670"/>

                <!-- <NavCard cardName = "Skins" imgUrl="https://media.discordapp.net/attachments/1075396207968534580/1082306634912645230/lotus_loadingscreen_p1.png?width=1191&height=670"/> -->
            </div>

        </div>
    </section>

        
</template>

<script>

import NavCard from './NavCard.vue'


    export default {
    name: 'MainSection',
    components: {
        NavCard, 
    }
    
}
</script>


<style scoped>


.text-presentation{
    font-size: 1em;
}


.main-section {
    background-color : #ECE8E1; 
}

.img{
    width : 100 vw;
    height : 70vh;
    background-image : url("../assets/main-img.jpg");
    background-size : cover;
}



.navCards{
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;

    padding : 5%;
}

.title{
    padding : 2%;
    margin-right : 60%;
    font-family : Valorant;
    font-size : 4em;
    color :  #111;
}
</style>
<template> 
    <section class = "main-section">
        <div class="img-header" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></div>
        <div class="accueil-content">
            <h1 class="title-homepage"> Presentation </h1>

            <div class="text-presentation">
                <p> 
                    Ce site a été crée dans le cadre d’un projet étudiant au cours de la formation IMAC. 
                    Il utilise <a href="https://valorant-api.com/" target="_blank">l’API Valorant</a> et regroupe les principaux éléments du jeu. <br>
                </p>
                <p>
                        Ce site a été créé conformément à la politique « Jibber Jabber juridique » de Riot Games à l'aide de ressources appartenant à Riot Games. <br> 
                        Riot Games ne cautionne ni ne sponsorise ce projet.
                </p>
            </div>

            <div class="navCards">
                <router-link :to="{name: 'agents'}" class="router">
                <NavCard cardName = "Agents" imgUrl="https://www.gamewallpapers.com/wallpapers_slechte_compressie/01wallpapers/wallpaper_valorant_01_1920x1080.jpg"/>
                </router-link>

                <router-link :to="{name: 'maps'}" class="router">
                <NavCard cardName = "Cartes" imgUrl="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"/>
                </router-link>

                <router-link :to="{name: 'weapons'}" class="router">
                <NavCard cardName = "Arsenal" imgUrl="https://i.pinimg.com/564x/66/82/21/668221f9c0fba131b5b755faa911b57a.jpg"/>
                </router-link>
                
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
    },
    data(){
        return {
            headerImg: require('../assets/main-img.jpg'),
        }
    }
    
}
</script>


<style scoped>
.main-section{
    overflow: hidden;
}
@media screen and (min-width:1024px){
    .img-header{
       background-position: 50% 10% !important; 
    }
    .text-presentation{
        font-size: 1.2vw;
        padding: 0 2% 0 2%;
    }

    .title-homepage{
        padding : 2%;
        margin-right : 60%;
        font-family : Valorant;
        font-size : 3em;
        color :  #111;
    }


    .navCards{
        display : flex;
        flex-direction : row;
        justify-content : space-evenly;
        padding : 5%;
    }


    .router{
        text-decoration: none;
    }

}





@media screen and (min-width: 767px) and (max-width:1023px){
.text-presentation{
    font-size: 2.2vw;
}

.navCards{
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    padding : 5%;
}

.title-homepage{
    padding : 2%;
    margin-right : 60%;
    font-family : Valorant;
    font-size : 3em;
    color :  #111;
}

.router{
    text-decoration: none;
}

}





@media screen and (max-width:767px){
    .text-presentation{
    font-size: 3vw;
    margin : 0.2vw;
}

.accueil-content{
    height: 100vw;
}

.title-homepage{
    padding : 2%;
    margin-right : 60%;
    font-family : Valorant;
    font-size : 7vw;
    color :  #111;
}


.navCards{
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    padding : 5%;
}


.router{
    text-decoration: none;
}
}



</style>
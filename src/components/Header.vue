<template> 
    <header class="header">
        <nav class="navbar">
            <img class="valorant-logo" src="../assets/valorant-logo.svg" alt="valorant-logo">
            <ul class="ul-container">
                <li><router-link :to="{name: 'homepage'}"> Accueil </router-link></li>
                <li><router-link :to="{name: 'weapons'}"> Arsenal</router-link></li>
                <li><router-link :to="{name: 'agents'}">Agents</router-link></li>
                <li><router-link :to="{name: 'maps'}">Cartes</router-link></li>
            </ul>
        </nav>
        
    </header>
</template>

<script>
    export default {
    name: 'HeaderSection',
    
    
}
</script>


<style scoped>

@media screen and (min-width: 1024px) {
.valorant-logo {
    width: 3%;
    height : auto;
    padding : 20px;
    margin-right : auto;
}

.header {
    display: flex;
    flex-direction: column;
    align-items : center;
    justify-content : center;
}
   
    

.navbar{
    background-color: #111;
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    align-items: center;
    width: 100%;
    height: 75px;
}


.ul-container {
    display :flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right : auto;
    margin-left : 0;
}

li{
    margin : 20px;
    color : white;
    list-style-type: none;
}

a{
    text-decoration: none;
    color : white;
}

a:hover{
    color : #FF4655;
    text-decoration: underline;
}




}





@media screen and  (min-width: 768px) and (max-width: 1023px) {
.valorant-logo {
    margin-left: 20px;
    width: 30px;
    height : auto;
}

/* .header {
} */

.navbar{
    background-color: #111;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items: center;

    height: 75px;
}


.ul-container {
    
    display :flex;
    flex-direction: row;
    margin-right: 25%;
    
}

li{
    margin : 20px;
    color : white;
    list-style-type: none;
    font-size: 1em;
    
}

a{
    text-decoration: none;
    color : white;
}

a:hover{
    color : #FF4655;
    text-decoration: underline;
}


}






@media screen and (max-width: 768px) {
.valorant-logo {
    margin-left: 2%;
    width: 2.5vh;
    height : auto;
}

/* .header {
} */

.navbar{
    background-color: #111;
    height: 50px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items: center;
    
}


.ul-container {
    display :flex;
    flex-direction: row;
    align-items: center;
    justify-content : center;

    width:100%;
    height:100%;
    margin :0;
    /* margin-right: 100px; */
    padding : 0;
}

li{
    margin : 5%;
    color : white;
    list-style-type: none;
    font-size: 80%;
    
}

a{
    text-decoration: none;
    color : white;
}

a:hover{
    color : #FF4655;
    text-decoration: underline;
}



   
}
</style>
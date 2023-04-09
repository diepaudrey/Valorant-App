<template> 
    <header class="header">
        <nav class="navbar">
            <img class="valorant-logo" src="../assets/valorant-logo.svg" alt="valorant-logo">
            <ul class="ul-container">
                <li><router-link :to="{name: 'homepage'}"> Accueil </router-link></li>
                <li><router-link :to="{name: 'agents'}">Agents</router-link></li>
                <li><router-link :to="{name: 'weapons'}"> Arsenal</router-link></li>
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
    position: relative;
    width: 2%;
    height : auto;
    padding : 20px;
    margin-right : auto;
    z-index: 1;
}

.header {
    display: flex;
    flex-direction: column;
    align-items : center;
    justify-content : center;
}
   
    

.navbar{
    position: relative;

    background-color: #111;
    width: 100%;
    height: 75px;

    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items: center;
    
}


.ul-container {
    /*full navbar width*/
    width : 100%;

    /*set flexbox*/
    display :flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /*set margins & padding*/
    margin-right : auto;
    margin-left : 0;
    padding : 0;

    /*change z-index */
    position: absolute;
    z-index: 0;
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





@media screen and  (min-width: 767px) and (max-width: 1023px) {
.valorant-logo {
    margin-left: 20px;
    width: 5%;
    height : auto;

    position: relative;
    z-index: 1;
}



.navbar{
    background-color: #111;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items: center;

    height: 75px;
}


.ul-container {
    position: absolute;
    display :flex;
    flex-direction: row;
    justify-content: center;
    padding : 0;
    margin :0;
    width : 100%;
    z-index: 0;

    align-items: center;
    
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






@media screen and (max-width: 767px) {
.valorant-logo {
    margin-left: 3%;
    width: 5%;
    height : auto;
}


.navbar{
    background-color: #111;
    height: 5%;
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
    font-size: 3vw;
    
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
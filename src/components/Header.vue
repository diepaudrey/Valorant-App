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
.valorant-logo {
    width: 3%;
    height : auto;
    padding : 20px;
    margin-right : auto;
    

}

.header {
    background-color: #111;
}

.navbar{
    display : flex;
    flex-direction : row;
    justify-content : space-between;
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
</style>
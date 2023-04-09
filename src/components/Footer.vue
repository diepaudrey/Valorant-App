<template>
    <footer>
        <div class="container-footer-text">
            <p class="text"> Politique de confidentilité </p>
            <p class="text"> Préférences cookies </p>
            <p class="text"> Contact </p>
        </div>
    </footer>

</template>

<script>
export default {
    name: 'FooterSection',
    
    
}
</script>

<style scoped>
@media screen and (min-width:1024px){
    footer{
    background-color:#111;

}
.container-footer-text{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height : 15vh;
    color: white;
}


}



@media screen and (min-width: 767px) and (max-width:1023px){
    footer{
    background-color:#111;

}
.container-footer-text{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height : 10vh;
    color: white;
}
.text{
    font-size: 12px;
}

}


@media screen and (max-width:767px){
    footer{
    background-color:#111;

}
.container-footer-text{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height : 10vh;
    color: white;
}
.text{
    font-size: 2vw;
}


}



</style>
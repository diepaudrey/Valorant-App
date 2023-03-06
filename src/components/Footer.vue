<template>
    <footer>
        <div class="footer-text">
            <p> Politique de confidentilité </p>
            <p> Préférences cookies </p>
            <p> Contact </p>
        </div>
    </footer>

</template>

<script>
export default {
    name: 'FooterSection',
    
    
}
</script>

<style scoped>


footer{
    background-color:#111;

}
.footer-text{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height : 200px;

    color: white;
}


</style>
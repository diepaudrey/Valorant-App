<template>
    <div class="info-container">
        <h2 class="map-name"> {{mapName}} </h2>
        <div class="map-card"></div>
    </div>

</template>

<script>
    export default {
    name: 'MapCard',
    props:{
        mapName : String,
        imgUrl : {type : String, default : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt962a6518612d78db/6131a93da9655d098c7cd8f0/09082021-Episode-3-Act-II-Overview-Article-Banner.jpg"}
    }
}


</script>

<style scoped>
.info-container {
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 10px;
}

.map-card {
    width : 60vw;
    height : 30vh;
    background-image: url('https://prod.assets.earlygamecdn.com/images/lotus.jpg?mtime=1673030420');
    background-size: cover;
    background-position: center;
}

.map-name{
    margin-right: 55%;
}

</style>
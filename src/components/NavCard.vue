<template>
    <div class="card">
        <img class="background" v-bind:src="imgUrl"/>
        <h2 class="cardName"> {{cardName}} </h2>
    </div>

</template>

<script>
    export default {
    name: 'NavCard',
    props: {
        cardName : String,
        imgUrl : {type : String, default : "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt962a6518612d78db/6131a93da9655d098c7cd8f0/09082021-Episode-3-Act-II-Overview-Article-Banner.jpg"}
    }

}
</script>


<style scoped>

.background{
    position : absolute;
    height : 200px;
    width : 200px;
    object-fit : cover;
}

.card{
    height : 200px;
    width : 200px;
    position : relative;

    display :flex;
    justify-content : center;
    align-items : center;

    margin : 1%;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  z-index: 1;
}


h2 {
  color:  #ECE8E1;
  margin :0;
  font-size : 2em;
  z-index: 2;
}


</style>
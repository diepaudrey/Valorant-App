<template>
    <div class="container">
        <div class="agent-div" v-bind:style="{ 'background-image': 'url(' + agentImg + ')' }">
        </div>
        <p class="agent-name"> {{agentName}} </p>
    </div>
    
    
</template>

<script>
export default {
    name : 'AgentCard',
    props : ["agentName", "agentImg"],

}
</script>


<style scoped>

@media screen and (min-width:1024px){
.container {
    /* width : 25vw;
    height : 50px; */
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: center;

}

.agent-name{
    font-family: 'Hind', sans-serif;
    font-size : 1vw;
    font-weight: 300;
    color : var(--grey-border);
}

.agent-div{
    width: 3vw;
    height: 3vw;
    /* margin-top : 20px; */

    background-size: cover;

}


}
@media screen and (min-width: 768px) and (max-width:1023px){
.container {
    /*set size of the container*/
    width : 200px;
    height : 200px;
    padding : 10px;

    /*set flexbox*/ 
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: space-around;

    /*set grey border*/
    border : 1px solid #BDBAB4;
    
    
}

.agent-name{
    font-family: 'Hind', sans-serif;
    font-size : 1vw;
    font-weight: 300;
    color : var(--grey-border);
}

.agent-div{
    width: 150px;
    height: 150px;
    background-size: cover;

}

}
@media screen and (max-width:767px){

    .container {
    /*set size of the container*/
    width : 115px;
    height : 115px;
    padding : 2px;

    /*set flexbox*/ 
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: space-around;

    /*set grey border*/
    border : 1px solid #BDBAB4;
    
    
}

.agent-name{
    font-size: 1em;
    color: #111;
    margin-top :5px;
    margin-bottom: 0;
}

.agent-div{
    width: 80%;
    height: 80%;
    background-size: cover;

}
}

</style>

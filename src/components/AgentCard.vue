<template>
    <div class="container">
        <div class="agent-div" v-bind:style="{ 'background-image': 'url(' + agentImg + ')' }">
        <!-- <img class="agent-img" v-bind:src="agentImg" alt="agent image" > -->
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
.container {
    width : 250px;
    height : 250px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: center;
    border : 1px solid #BDBAB4;

}

.agent-name{
    font-size: 1.5em;
    color: #111;
}

.agent-div{
    width: 150px;
    height: 150px;
    margin-top : 20px;

    background-size: cover;

}

</style>

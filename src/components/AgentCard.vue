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
    width : 250px;
    height : 250px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: center;
    border : 1px solid #BDBAB4;
    color: #111;
}
.container:hover{
    -webkit-transition: color 0.5s;
    transition: color 0.5s;
    color: var(--red);
    font-weight: bold;
    border : 2px solid var(--red);
}


.agent-name{
    font-size: 1.5em;
    
}


.agent-div{
    position : relative;
    width: 150px;
    height: 150px;
    margin-top : 20px;

    background-size: cover;

}



.agent-div:hover::before{

    position: absolute;
    top: 0;
    left: -10%;
    z-index: 2;
    display: block;
    content: '';
    width: 30%;
    height: 100%;
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);

    -webkit-animation: shine .75s;
    animation: shine .75s;
}

@-webkit-keyframes shine {
    100% {
        left: 125%;
    }
}
@keyframes shine {
    100% {
        left: 125%;
    }
}


}
@media screen and (min-width: 767px) and (max-width:1023px){
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
    color: #111;
    
    
}
.container:hover{
    -webkit-transition: color 0.5s;
    transition: color 0.5s;
    color: var(--red);
    border : 1px solid var(--red);
    font-weight: bold;
}

.agent-name{
    font-size: 1.5em;

    margin :0;
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
    color: #111;
    
    
}
.container:hover{
    -webkit-transition: color 0.5s;
    transition: color 0.5s;
    color: var(--red);
    font-weight: bold;
    border : 1px solid var(--red);
}

.agent-name{
    font-size: 1em;
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

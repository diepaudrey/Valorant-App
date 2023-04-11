<template>
    <div class="container">
        <div class="ability-div" v-bind:style="{ 'background-image': 'url(' + abilityImg + ')' }">
        </div>
        <p class="ability-name"> {{abilityName}} </p>
    </div>
    
    
</template>

<script>
export default {
    name : 'AbilityCard',
    props : ["abilityName", "abilityImg"],

}
</script>


<style scoped>

@media screen and (min-width:1024px){
.container {
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: center;

}

.ability-name{
    font-family: 'Hind', sans-serif;
    font-size : 1vw;
    font-weight: 300;
    color : var(--grey-border);
}

.ability-div{
    width: 3vw;
    height: 3vw;
    /* margin-top : 20px; */

    background-size: cover;

}


}
@media screen and (min-width: 767px) and (max-width:1023px){
.container {
    /*set flexbox*/ 
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: space-around;

    padding : 10px;
    
    
}

.ability-name{
    font-family: 'Hind', sans-serif;
    font-size : 1vw;
    font-weight: 300;
    color : var(--grey-border);
}

.ability-div{
    width: 50px;
    height: 50px;
    background-size: cover;

}

}
@media screen and (max-width:767px){

    .container {
    /*set flexbox*/ 
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: space-around;

    padding : 2px;
}

.ability-name{
    font-size: 3vw;
    color : var(--grey-border);
    margin-top :5px;
    margin-bottom: 0;
}

.ability-div{
    width: 7vw;
    height: 7vw;
    background-size: cover;

}
}

</style>

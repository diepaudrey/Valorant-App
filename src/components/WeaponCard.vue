<template> 
    <div class="weapon-card">
        <img class="weapon-img" v-bind:src="weaponImg" alt="Weapon image" >
        <p class="weapon-name"> {{weaponName}} </p>
    </div>
   
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'WeaponCard',
        props : {
            weaponName : String,
            weaponImg : String,
        } 
    }


</script>


<style scoped>
@media screen and (min-width: 1024px) {

.weapon-card{
    /*set flexbox*/ 
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : center;

    /*set size & border card*/
    width: 80%;
    height: 250px;
    border : 1px solid #BDBAB4;
    color: black;

}

.weapon-card:hover{
    -webkit-transition: color 0.5s;
    transition: color 0.5s;
    color: var(--red);
    font-weight: bold;
    border : 2px solid var(--red);
}

.weapon-img {
    height: 50%;
    width : auto;
}

.weapon-name{
    font-size: 1.5em;
    margin : 0;
}   

}

@media screen and (min-width: 767px) and (max-width:1023px){
    .weapon-card{
    /*set flexbox*/ 
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : center;

    /*set size & border card*/
    width: 80%;
    height: 250px;
    border : 1px solid #BDBAB4;

}

.weapon-img {
    height: 50%;
    width : auto;
}

.weapon-name{
    font-size: 1.5em;
    color: #111;
    margin : 0;
}   
}


@media screen and (max-width: 767px) {

.weapon-card{
    /*set flexbox*/ 
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : center;

    /*set size & border card*/
    width: 80%;
    height: 100px;
    border : 1px solid #BDBAB4;

}

.weapon-img {
    flex-shrink:0;
    -webkit-flex-shrink: 0;
    max-width:70%;
    max-height:60%;

}

.weapon-name{
    font-size: 0.8em;
    color: #111;
    margin :0;
}

}




</style>
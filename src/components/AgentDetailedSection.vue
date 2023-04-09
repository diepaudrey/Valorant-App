<template>
    <section class="agent-section">
        <div class="agent-img" v-bind:style="{ 'background-image': 'url(' + agent.fullPortrait + ')' }"></div>

        <div class="agent-description">

            <div class="name"> {{ agent.displayName }}</div>


            <div class="info-container">

                <div class="role-container">
                    <p class="category"> -Rôle-</p>
                    <p class="text-role">{{ agent.role.displayName }}</p>
                </div>
                
                <div class="bio-container">
                    <p class="category">-Biographie-</p>
                    <p class="text-bio"> {{ agent.description }}</p>
                </div>
            </div>

            <div class="spells-box">

                <div class="text-spells">
                    <p class="category"> -Kit-</p>
                    <p class="text-role">Compétences</p>
                </div>
                    
                    <div class="spells-container">
                        <div class="ability" v-for="(ability, index) in agent.abilities" :key="index">
                            <AbilityCard v-if="agent.isPlayableCharacter" :abilityName="ability.displayName" :abilityImg="ability.displayIcon" />
                        </div>
                    </div>
            </div>
            
        </div>
        


    </section>
</template>

<script>
import AbilityCard from './AbilityCard.vue'

export default{
    name : 'AgentDetailedSection',
    components : {
        AbilityCard,
    },
    props : ["agent"],
    
}


</script>

<style scoped>
@media screen and (min-width:1024px) {
    .agent-section{
    /*flexbox*/
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    /*set section size and border*/
    border : 1px solid var(--grey-border);
    width: 85vw;
    height: 60%;

    color: #ECE8E1;



}
.agent-img{
    height: 50vw;
    width : 30vw;
    background-size : cover;
    background-position: center;
}

.agent-description{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.info-container{
    /*set flexbox*/
    display: flex;
    flex-direction : column;
    justify-content: space-between;

    /*set size of div*/
    width : 45vw;
    height : auto;

    background-color: var(--dark-blue) ;
    
}

.role-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2vw;


}
.bio-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2vw;
    text-align: justify;
}

.spells-container{
    display: flex;
    flex-direction: row;
    margin-top : 2vw;
    
   
}
.spells-box{

    background-color: var(--dark-blue) ;
    margin-top : 1.5vw;
    margin-bottom : 1.5vw;


}
 .text-spells{
    padding-left: 2vw;
    padding-top: 2vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
 }

.ability{
    width : 10vw;
    height : auto;
}

.name{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size : 3vw;
    color :#0F1923;
}

.text-role{
    font-family : Impact, 'Arial Narrow';
    font-size : 3vw;

    padding-left : 1vw;
    padding-right : 1vw;
    margin : 0;
    border : 1px solid var(--grey-border);

}
.text-bio{
    margin:0;
    font-family: 'Hind', sans-serif;
    font-size : 1.5vw;

}


.category{
    margin:0;
    font-family: 'Hind', sans-serif;
    font-size : 1vw;
    font-weight: 300;
    color : var(--grey-border);
}
}

@media screen and (min-width:768px) and (max-width:1023px){
    .agent-section{
    /*flexbox*/
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    /*set section size and border*/
    border : 1px solid var(--grey-border);
    width: 85vw;
    height: 60%;

    color: #ECE8E1;



}
.agent-img{
    height: 50vw;
    width : 30vw;
    background-size : cover;
    background-position: center;
}

.agent-description{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.info-container{
    /*set flexbox*/
    display: flex;
    flex-direction : column;
    justify-content: space-between;

    /*set size of div*/
    width : 45vw;
    height : auto;

    background-color: var(--dark-blue) ;
    
}

.role-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2vw;


}
.bio-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2vw;
    text-align: justify;
}

.spells-container{
    display: flex;
    flex-direction: row;
    margin-top : 2vw;
    
   
}
.spells-box{

    background-color: var(--dark-blue) ;
    margin-top : 1.5vw;
    margin-bottom : 1.5vw;


}
 .text-spells{
    padding-left: 2vw;
    padding-top: 2vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
 }

.ability{
    width : 10vw;
    height : auto;
}

.name{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size : 3vw;
    color :#0F1923;
}

.text-role{
    font-family : Impact, 'Arial Narrow';
    font-size : 3vw;

    padding-left : 1vw;
    padding-right : 1vw;
    margin : 0;
    border : 1px solid var(--grey-border);

}
.text-bio{
    margin:0;
    font-family: 'Hind', sans-serif;
    font-size : 1.5vw;

}


.category{
    margin:0;
    font-family: 'Hind', sans-serif;
    font-size : 1vw;
    font-weight: 300;
    color : var(--grey-border);
}
}

@media screen and (max-width:767px){
    .agent-section{
    /*flexbox*/
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    /*set section size and border*/
    border : 1px solid var(--grey-border);
    width: 85vw;
    height: 60%;

    color: #ECE8E1;



}
.agent-img{
    height: 50vw;
    width : 30vw;
    background-size : cover;
    background-position: center;
}

.agent-description{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.info-container{
    /*set flexbox*/
    display: flex;
    flex-direction : column;
    justify-content: space-between;

    /*set size of div*/
    width : 45vw;
    height : auto;

    background-color: var(--dark-blue) ;
    
}

.role-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2vw;


}
.bio-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2vw;
    text-align: justify;
}

.spells-container{
    display: flex;
    flex-direction: row;
    margin-top : 2vw;
    
   
}
.spells-box{

    background-color: var(--dark-blue) ;
    margin-top : 1.5vw;
    margin-bottom : 1.5vw;


}
 .text-spells{
    padding-left: 2vw;
    padding-top: 2vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
 }

.ability{
    width : 10vw;
    height : auto;
}

.name{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size : 3vw;
    color :#0F1923;
}

.text-role{
    font-family : Impact, 'Arial Narrow';
    font-size : 3vw;

    padding-left : 1vw;
    padding-right : 1vw;
    margin : 0;
    border : 1px solid var(--grey-border);

}
.text-bio{
    margin:0;
    font-family: 'Hind', sans-serif;
    font-size : 1.5vw;

}


.category{
    margin:0;
    font-family: 'Hind', sans-serif;
    font-size : 1vw;
    font-weight: 300;
    color : var(--grey-border);
}
}


</style>
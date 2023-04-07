<template>
    <section class="agent-section">
        <div class="agent-img" v-bind:style="{ 'background-image': 'url(' + agentImg + ')' }"></div>
        <div class="agent-description">

            <div class="name"> {{ agentName }}</div>


            <div class="info-container">

                <div class="role-container">
                    <p class="category"> -Rôle-</p>
                    <p class="text-role">{{ agentRole }}</p>
                </div>
                
                <div class="bio-container">
                    <p class="category">-Biographie-</p>
                    <p class="text-bio"> {{ agentBio }}</p>
                </div>
            </div>

            <div class="spells-box">
                <div class="spells-container">
                <p class="category"> -Kit-</p>
                <p class="text-role">Compétences</p>
            </div>


            </div>
            
        </div>
        


    </section>
</template>

<script>
export default{
    name : 'AgentDetailedSection',
    // props : ["agentName", "agentImg", "agentRole", "agentBio"]
    props : {
        agentName :{type: String, default: "Fade"},
        agentRole : {type: String, default: "Initiator"},
        agentBio :  {type : String, default : "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",},
        agentImg : {type : String, default : "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png"},
        
    }
}
</script>

<style scoped>
@media screen and (min-width:1024) {
    
}


.agent-section{
    /*flexbox*/
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    /*set section size and border*/
    border : 1px solid var(--grey-border);
    width: 80vw;
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
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1vw;
   
}
.spells-box{
    width : 100%;
    height : 10vw;
    background-color: var(--dark-blue) ;

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
</style>
<template>
    <section class="agent-section">
        <div class="img-header" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></div>

        
        

        <div class="infoContainer">
            <div class="header-section">
                <h1 class="title"> Agents </h1>

                <div class="search-bar">
                        <input type="text" v-model="search" placeholder="Chercher un agent">
                        
                </div>
            </div>

            <div class="selectedAgent">
                <AgentDetailedSection v-if="selectedAgent" :agent="selectedAgent" />
            </div>


            <div class="agent-cards">
                <div v-for="(agent, index) in agents" :key="index">
                <AgentCard @click="selectAgent(agent)" class="agent-card" v-if="agent.isPlayableCharacter"  :agentName="agent.displayName" :agentImg="agent.displayIcon" />
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
 /* eslint-disable */
import AgentCard from './AgentCard.vue'
import { getAgentsData } from '@/services/api/weaponsAPI.js'
import AgentDetailedSection from './AgentDetailedSection.vue';

    export default{
        name : 'AgentSection',

        components : {
            AgentCard, AgentDetailedSection

        },
        data(){
            return {
                agents : [],
                headerImg: require('../assets/agents.jpg'),
                selectedAgent: null
                
            };
        },

        created(){
            this.getAgents();
        },

        methods : {
            getAgents(){
                getAgentsData().then((result) => this.agents = result.data.sort((a,b)=> a.displayName.localeCompare(b.displayName)))
            
            },

            selectAgent(agent){
                this.selectedAgent = agent;
            }
        }
        
    }
</script>

<style scoped>
@media screen and (min-width:1024px){
    .agent-section{
    overflow : hidden;
    
}


.agent-cards{
    display : flex;
    flex-direction : row;
    justify-content: center;
    flex-wrap: wrap;
    
}

.infoContainer{
    padding-bottom : 100px;
}

.selectedAgent{
    display : flex;
    justify-content: center;
    margin-bottom : 5%
}
}
@media screen and (min-width: 768px) and (max-width:1023px){
.agent-section{
    overflow : hidden;
}


.agent-cards{
    display : flex;
    flex-direction : row;
    justify-content: center;
    flex-wrap: wrap;
}

.infoContainer{
    padding-bottom : 25px;
}

.selectedAgent{
    display : flex;
    justify-content: center;
    margin-bottom : 5%
}

}
@media screen and (max-width:767px){
    .agent-section{
    overflow : hidden;
}


.agent-cards{
    display : flex;
    flex-direction : row;
    justify-content: center;
    flex-wrap: wrap;
}

.infoContainer{
    padding-bottom : 25px;
}

.selectedAgent{
    display : flex;
    justify-content: center;
    margin-bottom : 5%
}
}





</style>
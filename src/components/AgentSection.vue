<template>
    <section class="agent-section">
        <div class="img-box"></div>

        <div class="infoContainer">
            <h2 class="title"> Agents </h2>
            <h3 class="agent-type"> Type d'agent </h3>

            <div class="agent-cards">
                <div v-for="(agent, index) in agents" :key="index">
                <AgentCard class="agent-card" :agentName="agent.displayName" :agentImg="agent.displayIcon" />
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
 /* eslint-disable */
import AgentCard from './AgentCard.vue'
import { getAgentsData } from '@/services/api/weaponsAPI.js'

    export default{
        name : 'AgentSection',
        components : {
            AgentCard,

        },
        data(){
            return {
                agents : []
            };
        },

        created(){
            this.getAgents();
        },

        methods : {
            getAgents(){
                this.agents = getAgentsData();
                this.agents.then((result) => this.agents = result.data, console.log(this.agents))
            
            }
        }
        
    }
</script>

<style scoped>


.agent-section{
    overflow : hidden;
}

.img-box{
    width: 100vw;
    height: 70vh;
    background-image: url("../assets/agents.jpg");
    background-size: cover;
}




.agent-cards{
    display : flex;
    flex-direction : row;
    justify-content: center;
    flex-wrap: wrap;
}



</style>
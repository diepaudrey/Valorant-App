<template>
    <section class="agent-section">
        <div class="img-header" :style="{ backgroundImage: 'url(' + headerImg + ')' }"></div>


        <div class="infoContainer">
            <div class="header-section">
                <h1 class="title"> Agents </h1>

                <div class="search-sort-container">
                    <div class="search-bar">
                            <input type="text" v-model="search" placeholder="Chercher un agent">
                    </div>

                        <label for="agent-sort">Trier par : </label>
                        <select v-model="sortBy" id="agent-sort">
                            <option value="AZName">Noms de A à Z</option>
                            <option value="ZAName">Noms de Z à A</option>
                            <option value="AZRole">Role de A à Z</option>
                            <option value="ZARole">Role de Z à A</option>
                        </select>
            
                </div>
                
            </div>

            <div class="selectedAgent">
                <AgentDetailedSection @click="selectAgent(null)" v-if="selectedAgent" :agent="selectedAgent" />
            </div>


            <div class="agent-cards">
                <div v-for="(agent, index) in filteredAgents" :key="index">
                <AgentCard @click="selectAgent(agent), scrollToTop()" class="agent-card" v-if="agent.isPlayableCharacter"  :agentName="agent.displayName" :agentImg="agent.displayIcon" />
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

        watch:{
            search: function(newSearch){
                localStorage.setItem("search", newSearch)
            },
            sortBy: function(newSort){
                localStorage.setItem("sortBy", newSort)
            }

        },
        data(){
            return {
                agents : [],
                search : localStorage.getItem("search") || "",
                sortBy : localStorage.getItem("sortBy") || "AZName",
                headerImg: require('../assets/agents.jpg'),
                selectedAgent: null
                
            };
        },

        created(){
            this.getAgents();
        },

        computed: {


            filteredAgents(){
                let tempAgent  = this.agents

                //search bar
                if(this.search != '' && this.search){
                    tempAgent =  tempAgent.filter(agent => {return agent.displayName.toLowerCase().includes(this.search.toLowerCase())})
                }

                //sort by
                if(this.sortBy == 'AZName'){
                    tempAgent = tempAgent.sort((a,b)=> a.displayName.localeCompare(b.displayName))
                }
                else if(this.sortBy =='ZAName'){
                    //tempAgent = tempAgent.reverse()
                    tempAgent = tempAgent.sort((a,b)=> b.displayName.localeCompare(a.displayName))
                }


                if(this.sortBy == 'AZRole'){
                    tempAgent = tempAgent.sort((a, b) => {if (a.role && b.role) {return a.role.displayName.localeCompare(b.role.displayName);} else {
                    return 0;}});
                }
                else if(this.sortBy == 'ZARole'){
                    // tempAgent = tempAgent.reverse()
                    tempAgent = tempAgent.sort((a, b) => {if (a.role && b.role) {return b.role.displayName.localeCompare(a.role.displayName);} else {
                    return 0;}});
                }


                return tempAgent
            }
        },

        methods : {
            getAgents(){
                getAgentsData().then((result) => this.agents = result.data.sort((a,b)=> a.displayName.localeCompare(b.displayName)))
            
            },

            ZAfilter() {
                return this.agents.filter(agent => {return agent.displayName.toLowerCase().includes(this.search.toLowerCase())})
            },

            selectAgent(agent){
                this.selectedAgent = agent;
            },

            scrollToTop() {
                window.scrollTo({top: 670,
                    behavior: 'smooth'});
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


.search-sort-container{
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


}
@media screen and (min-width: 767px) and (max-width:1023px){
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
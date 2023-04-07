const getWeaponsData = async function () {
    const response = await fetch("https://valorant-api.com/v1/weapons")

    
    if(response.status === 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }


}

export { getWeaponsData }


const getAgentsData = async function () {
    const response = await fetch("https://valorant-api.com/v1/agents")

    
    if(response.status === 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }


}

export { getAgentsData }

const getMapsData = async function () {
    const response = await fetch("https://valorant-api.com/v1/maps")

    if(response.status === 200){
        
        return response.json()
    }
    else{
        new Error(response.statusText)
    }
}

export { getMapsData }

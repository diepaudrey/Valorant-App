const getWeaponsData = async function () {
    const response = await fetch("https://valorant-api.com/v1/weapons?language=fr-FR")

    
    if(response.status === 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }


}
export { getWeaponsData }

const getSkinsWeaponsData = async function () {
    const response = await fetch("https://valorant-api.com/v1/weapons/skins?language=fr-FR")

    
    if(response.status === 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }


}

export { getSkinsWeaponsData }


const getAgentsData = async function () {
    const response = await fetch("https://valorant-api.com/v1/agents?language=fr-FR")

    
    if(response.status === 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }


}

export { getAgentsData }

const getMapsData = async function () {
    const response = await fetch("https://valorant-api.com/v1/maps?language=fr-FR")

    if(response.status === 200){
        
        return response.json()
    }
    else{
        new Error(response.statusText)
    }
}

export { getMapsData }

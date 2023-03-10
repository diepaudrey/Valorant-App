const getWeaponsData = async function () {
    const response = await fetch("https://valorant-api.com/v1/weapons")

    return response.json()
    // if(response.status === 200){
        
    // }
    // else{
    //     new Error(response.statusText)
    // }


}

export { getWeaponsData }
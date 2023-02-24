import getEnvVars from "../constants/environment";

const getUrl = async () => {
    let apiUrlEnvironment = getEnvVars().apiUrl
  
    return apiUrlEnvironment
    // return localStorage.getItem('ApiUrl')
    // .then(result => {
    //   if (result && result.length > 0) {
    //     let objApiUrl = JSON.parse(result)      
  
    //     return objApiUrl.UrlPath.toString().trim()
    //   } else {
    //     return apiUrlEnvironment
    //   }
    // })
    // .catch(error => {
    //   console.log('Error obteniendo ApiURLConfigured: ', error.message ? error.message : error)
    //   return apiUrlEnvironment
    // })
}

const LogIn = async (data) => {
    let url = await getUrl()
  
    return await fetch(`${ url }/Login/Authenticate`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify(data)
    }).then( async (result) => {
      if (!result.ok) {
        throw Error(`Error status (${ result.status.toString() }) ${ result.statusText }`)
      } else {
        return await result.json()
      }
    })
    .catch( error => {
      throw error
    })
}

export default { LogIn }
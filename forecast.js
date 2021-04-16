const request=require("request");

const forecast=(address,callback)=>{
    const url="https://api.weatherapi.com/v1/current.json?key=2fd5fc9fb7a94a879ec91528213101&q="+address;
    request({url:url, json:true},(error,response)=>{
        if(error)
        {
            callback({error:"unable to fetch request please check your network connection"},undefined)
        }
        else if(response.body.error)
        {
            callback({error:"Invalid location name"},undefined)
        }
        else{
            callback(undefined,response.body)
        }
    })
}

module.exports=forecast
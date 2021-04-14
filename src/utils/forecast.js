const request= require('request')

const forecast=(latitude, longitude, callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=354c0df736148bd8862ea869ac75c4c8&query='+ latitude + ',' + longitude 

    request({url, json:true},(error, {body}) => {
        if(error)
        {
            callback('Unable to connect to weather service', undefined)
        }
        else if(body.error)
        {
            callback('Unable to find location', undefined)
        }
        else
        {
            callback(undefined, 'It is currently ' + body.current.temperature + ' but it feels like ' + body.current.feelslike)
        }
 })
}
    

module.exports=forecast
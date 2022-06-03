const express = require('express')
const app = express()
const PORT = 8000;
const rappers ={
'21 savage':{
    'birthName': 'Sheyaa Bin Abraham-Joseph' ,
    'birthLocation': 'London, England',
    'age': 29
},
'Eminem':{
    'birthName': 'Marshall Mathers iii' ,
    'birthLocation': 'Detroit, Michigan',
    'age': 49
},
'unknown':{
    'birthName': 'Supa Hot Fiya' ,
    'birthLocation': 'Mars, Milky way galaxy',
    'age': 0
}
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName= request.params.name.toLowerCase()
    
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }
    else{
        response.json(rappers['unknown'])
    }
    
})
app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! better go catch it`)
})
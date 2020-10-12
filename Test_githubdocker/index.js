var Express =require('express');
var app=Express();
app.get('/',function(req,res){
    res.send('Hello World (from Docker and github! by VEROVALDESLEIVA PRACTICANDO 1,2,3...)');
});
app.listen(8080);

const express = require('express');

const app = express();

 app.set('port', process.env.PORT || 8081);

 //custom 404 page
 app.use(function(req,res){
     res.type('text/plain');
     res.status(404)
     res.send('Sorry page not fond, please check your internet connection');
});

//custom 500 page
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500- Server Error');
});
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') +'; press Ctrl-C to terminate.');

});


const express =require('express')
const app = express();

app.get('/',(req,res)=>res.send('TQM'));
app.listen(80);
console.log('Server on port',80);
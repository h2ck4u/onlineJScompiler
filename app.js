const express = require('express')
const router = require('./server/router');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// CORS 설정
app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use('/static', express.static(__dirname + '/src'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/module', express.static(__dirname + '/module'));
app.use('/', router);

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});
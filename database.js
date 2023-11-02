const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mean-employees', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
        //useCreateIndex: true
}).then(db => console.log('Db is connected')).catch(err => console.error(err));


//mongoose.connect(uri, { family: 4 })


/* 
mongoose 
 .connect(process.env.MONGO_PROD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

 */
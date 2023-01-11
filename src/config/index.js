const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.set("strictQuery", false)
        await mongoose.connect("mongodb+srv://huuthang98tn:Huuthang9811@cluster0.b94nnxb.mongodb.net/test", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true,
            // retryWrites: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connect success');
    } catch (error) {
        console.log(error);
        console.log('Connect failed');
    }
}

module.exports = { connect };

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.set("strictQuery", false)
        await mongoose.connect("mongodb://127.0.0.1:27017/todolist", {
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

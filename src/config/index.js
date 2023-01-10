const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.DATABASE_URL, {
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
        console.log('Connect failed');
    }
}

module.exports = { connect };

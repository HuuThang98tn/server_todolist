// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.set("strictQuery", false)
//         await mongoose.connect(process.env.DATABASE_URL, {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//             // useFindAndModify: false,
//             // useCreateIndex: true,
//             // retryWrites: true,
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log('Connect success');
//     } catch (error) {
//         console.log('Connect failed');
//     }
// }

// module.exports = { connect };

const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.set("strictQuery", false)
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.DATABASE_URL, connectionParams);

        console.log("Kết nối cơ sở dữ liệu thành công !!!");

    } catch (error) {
        console.log(error);
        console.log("Kết nối cơ sở dữ liệu thất bại !!!");
    }
}
module.exports = { connect };


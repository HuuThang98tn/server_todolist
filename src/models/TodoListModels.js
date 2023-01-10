const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mTodoListSchema = new Schema({
    bang: {
        type: String,
    },
    zip: {
        type: String,
    },
    gmail: {
        type: String,
        // required: true,
        // trim: true,
    },
    password: {
        type: String,
        // required: true,
        // trim: true,
        // unique: true,
        // lowercase: true,
    },
    info: {
        type: String,
        // required: true,
        // trim: true,
    },
    note: {
        type: String,
        default: 'Không có ghi chú'

    },
    status: {
        type: String,
        // required: false,
        // default :"Chưa dùng"
    }
})
const mTodoListModel = mongoose.model("todolists", mTodoListSchema);
module.exports = mTodoListModel;
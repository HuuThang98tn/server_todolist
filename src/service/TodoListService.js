const Exceptions = require("../exception/Exceptions");
const NotFoundError = require("../exception/NotFoundError");
const mTodoListModel = require("../models/TodoListModels");
const mTodoListValidate = require("../validate/TodoListValidate")
class TodoListService {


    async getAllTodoList() {
        return await mTodoListModel.find({});
    }
    async createTodoList({ bang, zip, gmail, password, info, note, status }) {
        // mTodoListValidate.validateTodoLists(bang, zip, gmail, password, info, note, status)
        const newTodoList = new mTodoListModel({
            bang,
            zip,
            gmail,
            password,
            info,
            note,
            status
        });
        const { _id } = await newTodoList.save();
        return {
            _id,
            bang,
            zip,
            gmail,
            password,
            info,
            note,
            status
        }
    }

    async updateTodoList({ _id, bang, zip, gmail, password, info, note, status }) {
        const findId = await mTodoListModel.findById(_id)
        if (findId) {
            const queryResult = await mTodoListModel.updateOne({ _id: _id }, {
                bang,
                zip,
                gmail,
                password,
                info,
                note,
                status
            });
            return {
                _id,
                bang,
                zip,
                gmail,
                password,
                info,
                note,
                status,
                queryResult
            }
        } else {

            throw new NotFoundError("Not found")
        }


    }
    async deleteTodoList(_id) {
        return await mTodoListModel.deleteMany()
    }
    async deleteTodoListById(_id) {
        const findId = await mTodoListModel.findById(_id)
        if (findId) {
            await mTodoListModel.deleteOne({ _id })
        } else {
            throw new NotFoundError("Not found")

        }
    }
}

module.exports = new TodoListService();
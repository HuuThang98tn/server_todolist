const Exceptions = require("../exception/Exceptions");
const NotFoundError = require("../exception/NotFoundError");
const mTodoListModel = require("../models/TodoListModels");
const mTodoListValidate = require("../validate/TodoListValidate")
class SearchService {
    async getBangTodoList(bang) {
        return await mTodoListModel.find({ bang: { $regex: bang, $options: "i" } })
            .sort({ createdAt: "desc" })
            .select({})
            .exec()
    }
    async getStatusTodoList(status) {
        // return await mTodoListModel.find({ status: { $regex: status, $options: "is" } })
        return await mTodoListModel.find({ status: status })

            .sort({ createdAt: "desc" })
            .select({})
            .exec()
    }
    async getGmailTodoList(gmail) {
        return await mTodoListModel.find({ gmail: { $regex: gmail, $options: "i" } })
            .sort({ createdAt: "desc" })
            .select({})
            .exec()
    }
}
module.exports = new SearchService()
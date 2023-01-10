const { json } = require("express");
const searchService = require("../service/SearchService");
const mTodoListModel = require("../models/TodoListModels");
class SearchController {

    async mSearchBang(req, res, next) {
        const { bang } = req.body;
        try {
            const results = await searchService.getBangTodoList(bang)
            res.json({
                code: 200,
                message: "Success",
                results
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }

    }
    async mSearchStatus(req, res, next) {
        const { status } = req.body;
        try {
            const results = await searchService.getStatusTodoList(status)
            res.json({
                code: 200,
                message: "Success",
                results
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }

    }
    async mSearchGmail(req, res, next) {
        const { gmail } = req.body;
        try {
            const results = await searchService.getGmailTodoList(gmail)
            res.json({
                code: 200,
                message: "Success",
                results
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }
    }


}
module.exports = new SearchController();
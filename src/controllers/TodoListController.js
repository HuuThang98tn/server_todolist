const { json } = require("express");
const todolistsService = require("../service/TodoListService")
var multer = require('multer');
var path = require('path');
var XLSX = require('xlsx');
const mTodoListModel = require("../models/TodoListModels");
class TodoListController {
    async mGetTodoList(req, res, next) {
        try {
            const results = await todolistsService.getAllTodoList();
            res.json({
                code: 200,
                message: 'Success',
                results
            });
        } catch (error) {
            res.json(error)
        }
    }
    async mCreateTodoList(req, res, next) {
        const { bang, zip, gmail, password, info, note, status } = req.body;
        try {
            const todolists = await todolistsService.createTodoList({
                bang,
                zip,
                gmail,
                password,
                info,
                note,
                status
            })
            const results = [todolists]
            res.json({
                code: 200,
                message: "Success",
                results
            })
        } catch (error) {
            res.json(error)
        }
    }

    async mCreateTodolistArr(req, res, next) {
        var workbook = XLSX.readFile(req.file.path);
        var sheet_namelist = workbook.SheetNames;
        var x = 0;
        sheet_namelist.forEach(element => {
            var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
            mTodoListModel.insertMany(xlData, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
            x++;
        });


        try {


            res.json({
                code: 200,
                message: "Success",

            })
        } catch (error) {
            res.json(error)
        }
    }

    async mUpdateTodoList(req, res, next) {
        const { _id, bang, zip, gmail, password, info, note, status } = req.body;
        try {
            const todolists = await todolistsService.updateTodoList({
                _id,
                bang,
                zip,
                gmail,
                password,
                info,
                note,
                status
            })
            const results = [todolists]
            res.json({
                code: 200,
                message: "Success",
                results
            })
        } catch (error) {
            res.json(error)
        }

    }
    async mDeleteTodoList(req, res, next) {
        try {
            const deleteAll = await todolistsService.deleteTodoList();
            if (deleteAll) {
                res.json({
                    code: 200,
                    message: 'Success',
                    deleteAll
                })
            }

        } catch (error) {
            res.json({
                code: 400,
                message: 'Error',
                errorDetails: error
            })
        }

    }
    async mDeleteTodoListById(req, res, next) {
        const { idData } = req.body;

        try {
            const dataField = await todolistsService.deleteTodoListById(idData);
            res.json({
                code: 200,
                message: "Success",
                data: dataField
            })
        } catch (error) {
            res.json({
                code: 400,
                message: "Error",
                errorDetails: error
            })
        }



    }
}

module.exports = new TodoListController();
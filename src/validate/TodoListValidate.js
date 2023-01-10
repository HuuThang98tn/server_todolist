const MyError = require("../exception/MyError");

const todoListValidate = {
    validateGmail: (gmail) => {
        if (!gmail) {
            return false;

        } else if (gmail.length < 8 || gmail.length > 50) {
            return false;
        } else {
            return true;
        }
    },
    validatePassword: (password) => {
        if (!password) {
            return false;

        } else if (password.length < 8 || password.length > 50) {
            return false;
        } else {
            return true;
        }
    },
    validateInfo: (info) => {
        if (!info) {
            return false;
        } else if (info.length < 8 || info.length > 50) {
            return false;
        } else {
            return true;
        }
    },

    validateTodoLists: function (gmail, password, info) {
        if (!this.validateGmail(gmail) || !this.validatePassword(password) || !this.validateInfo(info))
            throw new MyError('Info todo List invalid');



    }

}

module.exports = todoListValidate;
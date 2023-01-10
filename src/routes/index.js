const mUsers = require("./AuthRoutes")
const mTodoListRoutes = require("./TodoListRoutes");
const mSearchRoutes = require("./SearchRoutes");

function routes(app) {

    app.use("/api-v1/users", mUsers)
    app.use("/api-v1/todos", mTodoListRoutes);
    app.use("/api-v1/search", mSearchRoutes);

}


module.exports = routes
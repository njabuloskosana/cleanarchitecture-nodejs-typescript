"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = __importDefault(require("./config/database"));
class App {
    constructor() {
        this.app = express();
        this.databaseSync();
        this.routes();
    }
    databaseSync() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("wecome");
        });
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Server started successfully");
});

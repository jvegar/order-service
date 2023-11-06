"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const CustomerDAO_1 = require("./dao/CustomerDAO");
const pool_1 = require("./pool");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.EXPRESS_PORT;
app.use(body_parser_1.default.json());
app.post("/customers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { displayName, email, telephone } = req.body;
    const customerDAO = new CustomerDAO_1.CustomerDAO(yield pool_1.pool.connect());
    const result = yield customerDAO.addCustomer(displayName, email, telephone);
    res.status(200).json({
        message: "Data received successfully",
        result: result,
    });
}));
app.listen(port, () => {
    console.log(`Server runningn on port ${port}`);
});

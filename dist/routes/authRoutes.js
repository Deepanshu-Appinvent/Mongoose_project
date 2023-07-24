"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signupRoute_1 = __importDefault(require("./signupRoute"));
const loginRoute_1 = __importDefault(require("./loginRoute"));
const cacheMiddleware_1 = __importDefault(require("../middleware/cacheMiddleware"));
const router = express_1.default.Router();
router.use('/ig', signupRoute_1.default);
router.use(cacheMiddleware_1.default);
router.use('/ig', loginRoute_1.default);
exports.default = router;

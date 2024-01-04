"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const mongo_1 = require("./config/mongo");
const bookingsController_1 = require("./controllers/bookingsController");
const commentsController_1 = require("./controllers/commentsController");
const login_1 = require("./controllers/login");
const roomsController_1 = require("./controllers/roomsController");
const usersController_1 = require("./controllers/usersController");
const login_2 = require("./middleware/login");
exports.app = express();
(0, mongo_1.connectMongo)();
exports.app.use(express.json());
const port = process.env.NODE_ENV === "test" ? 3001 : 3000;
exports.app.use("/login", login_1.loginRouter);
exports.app.use(login_2.loginAuthenticationMiddleware);
//Bookings
exports.app.use("/bookings", bookingsController_1.bookingRouter);
exports.app.use("/bookings/:id", bookingsController_1.bookingRouter);
//Comments
exports.app.use("/comments", commentsController_1.commentsRouter);
exports.app.use("/comments/:id", commentsController_1.commentsRouter);
//Rooms
exports.app.use("/rooms", roomsController_1.roomsRouter);
exports.app.use("/rooms/:id", roomsController_1.roomsRouter);
//Users
exports.app.use("/users", usersController_1.usersRouter);
exports.app.use("/users/:id", usersController_1.usersRouter);
exports.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = exports.app;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_1 = require("express");
const bookingsController_1 = require("./controllers/bookingsController");
const commentsController_1 = require("./controllers/commentsController");
const login_1 = require("./controllers/login");
const roomsController_1 = require("./controllers/roomsController");
const usersController_1 = require("./controllers/usersController");
const login_2 = require("./middleware/login");
const server = (0, express_1.Router)();
server.use("/login", login_1.loginRouter);
server.use(login_2.loginAuthenticationMiddleware);
//Bookings
server.use("/bookings", bookingsController_1.bookingRouter);
server.use("/bookings/:id", bookingsController_1.bookingRouter);
//Comments
server.use("/comments", commentsController_1.commentsRouter);
server.use("/comments/:id", commentsController_1.commentsRouter);
//Rooms
server.use("/rooms", roomsController_1.roomsRouter);
server.use("/rooms/:id", roomsController_1.roomsRouter);
//Users
server.use("/users", usersController_1.usersRouter);
server.use("/users/:id", usersController_1.usersRouter);
exports.default = server;

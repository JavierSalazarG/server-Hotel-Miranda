const express = require('express')

import {bookingRouter}  from './controllers/bookingsController';
import { commentsRouter } from './controllers/commentsController';
import { roomsRouter } from './controllers/roomsController';
import { usersRouter } from './controllers/usersController';
const app = express();
const port = 3000;

//Bookings
app.use('/bookings', bookingRouter);
app.use('/bookings/:id', bookingRouter);

//Comments
app.use('/comments', commentsRouter);
app.use('/comments/:id', commentsRouter);

//Rooms
app.use('/rooms', roomsRouter);
app.use('/rooms/:id', roomsRouter);

//Users
app.use('/users', usersRouter);
app.use('/users/:id', usersRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


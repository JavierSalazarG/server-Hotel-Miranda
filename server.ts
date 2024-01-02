const express  = require('express')

import {bookingRouter}  from './controllers/bookingsController';
import { commentsRouter } from './controllers/commentsController';
import { loginRouter } from './controllers/login';
import { roomsRouter } from './controllers/roomsController';
import { usersRouter } from './controllers/usersController';
import { loginAuthenticationMiddleware } from './middleware/login';
const app = express();
app.use(express.json())
const port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

app.use('/login', loginRouter)
app.use(loginAuthenticationMiddleware)
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

export default app
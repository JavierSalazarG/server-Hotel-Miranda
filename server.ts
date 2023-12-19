const express = require('express')

import {bookingRouter}  from './controllers/bookingsController';
const app = express();
const port = 3000;

app.use('/bookings', bookingRouter);
app.use('/bookings/:id', bookingRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


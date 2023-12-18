const Router = require('express')
import {getBookings}  from '../../controllers/bookingsController';

const routerBooking = Router();
// Rutas para Rooms

routerBooking.use('/api/booking', getBookings);

export default routerBooking;
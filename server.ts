const express = require('express')
import routerBooking from "./services/booking/routerBooking";
const app = express();
const port = 3000;


app.get('/', (req: Request, res: Response) => {

})

app.use(routerBooking)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


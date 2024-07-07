import express from "express";

import { BookingHistory } from "../Local-variables-data/local-memory.js";

const BookingHistoryRouter = express.Router();

//List How many times a Customer has Booked the room with Details

BookingHistoryRouter.get("/", (req, res) => {
    try {
        res.send({ msg: "Info About Customers Booked many times", BookingHistory });
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

export default BookingHistoryRouter;
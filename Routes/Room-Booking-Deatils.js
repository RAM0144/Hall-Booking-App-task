import express from "express";

import { RoomBookingDetails } from "../Local-variables-data/local-memory.js";

const BookingDetailsRouter = express.Router();

// List all Rooms with Booked Data

BookingDetailsRouter.get("/", (req, res) => {
    try {
        res.send({ msg: "Info About All Rooms with Booked Details", RoomBookingDetails })
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

export default BookingDetailsRouter;
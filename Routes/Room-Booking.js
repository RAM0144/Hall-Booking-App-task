import express from "express";

import { RoomBooking } from "../Local-variables-data/local-memory.js";

const RoomBookingRouter = express.Router();


// Get all Room Booking 
RoomBookingRouter.get("/",  (req, res) => {
    try {
        res.send({ msg: "Info About Room Booking", RoomBooking })
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

// Booking a Room
RoomBookingRouter.post("/:BookingId", (req, res) =>{
    const BookingInfo = req.body;
    const BookingId = req.params.BookingId;
    try {
        const index = RoomBooking.findIndex((book) => book.id === BookingId);
        const bookObj = RoomBooking.find((book) => book.id === BookingId)
      if (bookObj) {
        RoomBooking[index] = {
            ...bookObj,
            ...BookingInfo,
        };
      }
     
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

export default RoomBookingRouter;
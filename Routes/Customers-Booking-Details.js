import express from "express";

import { CustomerBookingDetails } from "../Local-variables-data/local-memory.js";

const CustomerBookingRouter = express.Router();

//List all Customers with Booked Data 

CustomerBookingRouter.get("/", (req, res) => {
    try {
        res.send({ msg: "Info About All Customer Booking Details", CustomerBookingDetails });
    } catch (error) {
      res.status(500).send({ msg: "Internal Server Error" });
    }
});

export default CustomerBookingRouter;
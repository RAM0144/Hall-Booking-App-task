import express from "express";
import roomRouter from "./Routes/Rooms.js";
import RoomBookingRouter from "./Routes/Room-Booking.js";
import CustomerBookingRouter from "./Routes/Customers-Booking-Details.js";
import BookingDetailsRouter from "./Routes/Room-Booking-Deatils.js";
import BookingHistoryRouter from "./Routes/Booking-History.js";

const server = express();

server.use(express.json());

server.use("/Rooms", roomRouter);
server.use("/RoomBooking", RoomBookingRouter);
server.use("/BookingDetails", BookingDetailsRouter);
server.use("/CustomerDetails", CustomerBookingRouter);
server.use("/BookingHistory", BookingHistoryRouter);


const port = 5300;

server.listen(port, () => {
    console.log( Date().toString(), "listening on server" ,port);
})
import express from "express";

import { Rooms } from "../Local-variables-data/local-memory.js";

// const Room = [];

const roomRouter = express.Router();

//Read all the Rooms
roomRouter.get("/", (req, res) => {
    try {
       res.send({ msg: "INFO about all the Rooms", Rooms}); 
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

// Read info about individual rooms
roomRouter.get("/:RoomId", (req, res) => {
    const RoomId = req.params.RoomId;

    try {
        const roomData = Rooms.find((room)=> room.id === RoomId);
     if (roomData) {
        res.send({ ...roomData });
     } else {
        res.status(404).send({ msg: "Rooms Not Found" });
     }
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });   
    }
})


// Create a new Room
roomRouter.post("/", (req, res) => {
    const roomInfo = {...req.body, id: Date.now().toString()}
        
    try {
        Room.push(roomInfo);
        res.send({ msg: "Rooms Created Successfully" });
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
});



//update the Room
roomRouter.put("/:RoomId", (req, res) => {
    const updateInfo = req.body;
    const RoomId = req.params.RoomId;

    try {
        const index = Rooms.findIndex((room) => room.id === RoomId);
        const roomObj = Rooms.find((room) => room.id === RoomId);

        if (roomObj) {
            Rooms[index] = {
                ...roomObj,
                ...updateInfo,
            };
            res.send({ msg: "Rooms Updated Successfully" });    
        } else {
            res.status(404).send({ msg: "No Rooms Found" });
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

export default roomRouter;
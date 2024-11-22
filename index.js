const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

const { initializeDatabase } = require("./db/db.connect");
const Events = require("./models/event.models");

app.use(express.json());

initializeDatabase();

async function createEvent(newEvent) {
  try {
    const event = new Events(newEvent);
    const saveEvent = await event.save();
    console.log("New Event Data", saveEvent);
  } catch (error) {
    throw error;
  }
}

app.post("/events", async (req, res) => {
    try {
       const savedEvent = await createEvent(req.body) ;
       res.status(201).json({message: "Event Added Successfully.", event: savedEvent})
    } catch (error) {
        res.status(500).json({ error: "Failed to add Event." });
    }
})

async function readAllEvents() {
    try {
        const readEvents = await Events.find();
        return readEvents;
    } catch (error) {
        throw error;
    }
}

app.get("/events", async (req, res) => {
    try {
        const events = await readAllEvents();
        if(events.length != 0) {
            res.json(events)
        } else {
            res.status(404).json({error: "No events found."})
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Events." });
    }
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

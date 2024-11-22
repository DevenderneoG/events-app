const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    eventDescription: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    eventBannerURl: {
      type: String,
      required: true,
    },
    typeOfEvent: {
      type: String,
      enum: ["Online", "Offline", "Both"],
      default: "Both",
    },
    sessionTimings: [
      {
        sessionTitle: {
          type: String,
          required: true,
        },
        startTime: {
          type: Date,
          required: true,
        },
        endTime: {
          type: Date,
          required: true,
        },
        speaker: {
          name: {
            type: String,
            required: true,
          },
          jobTitle: {
            type: String,
            required: true,
          },
          bio: {
            type: String,
            required: true,
          },
          image: {
            type: String, // URL to the speaker's image
          },
          url: {
            type: String, // URL to the speaker’s profile
          },
        },
      },
    ],
    pricing: {
      price: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
      isPaid: {
        type: Boolean,
        required: true,
      },
    },
    venue: {
      venueName: {
        type: String,
        required: true,
      },
      address: {
        streetAddress: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        postalCode: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
    },
    attendeeInfo: {
      dressCode: {
        type: String,
      },
      ageRestrictions: {
        type: String,
      },
      parking: {
        type: String,
      },
      food: {
        type: String,
      },
      wifi: {
        type: String,
      },
    },
    tags: [
      {
        type: String,
        enum: [
          "Marketing",
          "Digital Marketing",
          "Strategy",
          "Innovation",
          "Content Marketing",
        ], // Allowed tags
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Events = mongoose.model("Events", EventSchema);

module.exports = Events;

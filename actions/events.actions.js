const prisma = require("../config/prisma");

//Create Event action
const createEvent = async (name, location, price, description) => {
  try {
    const event = await prisma.events.create({
      data: {
        eventName: name,
        location: location,
        price: price,
        description: description,
      },
    });

    return {
      success: true,
      data: event,
    };
  } catch (error) {
    console.error("Error creating event: ", error.message);
    return {
      success: false,
      error: error.message || "An unexpected error occurred",
    };
  }
};

module.exports = createEvent;

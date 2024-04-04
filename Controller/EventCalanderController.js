const CalendarEvent = require('../Module/EventCalanderModule');

// Controller to create a new calendar event (POST request)
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    const event = new CalendarEvent({
      title,
      description,
      date,
      location,
    });

    await event.save();

    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Controller to get all calendar events (GET request)
exports.getAllEvents = async (req, res) => {
  try {
    const events = await CalendarEvent.find();

    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Controller to update a calendar event (PUT request)
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, location } = req.body;

    const updatedEvent = await CalendarEvent.findByIdAndUpdate(
      id,
      { title, description, date, location },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Controller to delete a calendar event (DELETE request)
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEvent = await CalendarEvent.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully', event: deletedEvent });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventid;

  const event = getEventById(eventId);

  const childStyle = {
    marginBottom: 32,
  };

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p style={childStyle}>No event found!</p>
          <Button link="/events">Show All Events</Button>
        </ErrorAlert>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
}

export default EventDetailPage;

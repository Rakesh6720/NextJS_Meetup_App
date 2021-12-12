import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";
import { getFeaturedEvents } from "../dummy-data";

function Homepage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Homepage;

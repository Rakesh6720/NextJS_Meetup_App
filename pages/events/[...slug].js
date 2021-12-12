import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  const childStyle = {
    marginBottom: 32,
  };

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  console.log(numYear + ", " + numMonth);
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p style={childStyle}>Invalid filter. Please adjust your values.</p>
          <div className="center" style={childStyle}>
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p style={childStyle}>No events found for the chosen filter!</p>
          <div className="center" style={childStyle}>
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }

  // date constructor has month of 0 so subtract 1
  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;

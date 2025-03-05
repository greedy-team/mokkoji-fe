import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { CustomCalendar } from "./CustomCalendar";
import CalendarItem from "./CalendarItem";

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CalendarStyles = styled.div`
  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    min-height: 100px;
  }
  .react-calendar__tile abbr {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
`;

function Calendar() {
  return (
    <CalendarStyles>
      <Title>일정</Title>
      <CustomCalendar
        tileContent={({ date }) => {
          return <CalendarItem date={date} />;
        }}
      />
    </CalendarStyles>
  );
}

export default Calendar;

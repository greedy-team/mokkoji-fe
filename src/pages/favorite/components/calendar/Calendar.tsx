import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { CustomCalendar } from "./CustomCalendar";
import CalendarItem from "./CalendarItem";

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

function Calendar() {
  return (
    <>
      <Title>일정</Title>
      <CustomCalendar
        tileContent={({ date }) => {
          return <CalendarItem date={date} />;
        }}
      />
    </>
  );
}

export default Calendar;

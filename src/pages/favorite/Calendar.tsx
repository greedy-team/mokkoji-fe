import styled from "styled-components";
import { useMemo } from "react";
import { useGetClubs } from "@/hooks/queries/clubs.query";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = styled(Calendar)`
  width: 100%;
  border: none !important;
  font-size: 1rem;

  .react-calendar__tile {
    position: relative;
    padding: 10px;
    border-radius: 5px;
    color: black !important;
  }

  .react-calendar__tile--now {
    background: none !important;
  }

  .highlight::after {
    content: "";
    display: block;
    width: 100%;
    height: 6px;
    background-color: rgba(59, 130, 246, 0.7);
    border-radius: 3px;
    position: absolute;
    bottom: 5px;
    left: 0;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: gray !important;
    opacity: 0.5;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CalendarComponent = () => {
  const { data } = useGetClubs(1, 5);

  const highlightedDates = useMemo(() => {
    if (!data) return [];

    return data.data.clubs
      .filter((club) => club.favorite)
      .flatMap((club) => {
        const start = club.recruitStartDate
          ? new Date(club.recruitStartDate)
          : new Date();
        const end = club.recruitEndDate
          ? new Date(club.recruitEndDate)
          : new Date();

        const dateList = [];
        const currentDate = new Date(start);

        while (currentDate <= end) {
          dateList.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }
        return dateList;
      });
  }, [data]);

  return (
    <>
      <Title>일정</Title>
      <CustomCalendar
        tileClassName={({ date }) =>
          highlightedDates.some(
            (highlighted) => date.toDateString() === highlighted.toDateString()
          )
            ? "highlight"
            : ""
        }
      />
    </>
  );
};

export default CalendarComponent;

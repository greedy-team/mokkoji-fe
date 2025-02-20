import styled from "styled-components";
import { useEffect, useState } from "react";
import { useGetClubs } from "@/hooks/queries/clubs.query";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  padding: 2rem;
`;

const CustomCalendar = styled(Calendar)`
  width: 100%;
  border: none !important;
  font-size: 1rem;
  max-width: 1200px;

  .react-calendar__tile {
    position: relative;
    padding: 10px;
    border-radius: 5px;
    color: black !important;
  }
  
  .react-calendar__tile--now {
    background: none !important; 
  }
   
  /*모집기간 표시*/
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
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CalendarComponent = () => {
  const { data } = useGetClubs();
  const [highlightedDates, setHighlightedDates] = useState<Date[]>([]);

  useEffect(() => {
    if (data) {
      const dates = data.data.clubs
        .filter((club) => club.favorite)
        .flatMap((club) => {
          const start = club.recruitStartDate ? new Date(club.recruitStartDate) : new Date();
          const end = club.recruitEndDate ? new Date(club.recruitEndDate) : new Date();
            
          let dateList = [];
          let currentDate = new Date(start);

          while (currentDate <= end) {
            dateList.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
          }
          return dateList;
        });

      setHighlightedDates(dates);
    }
  }, [data]);

  return (
    <CalendarWrapper>
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
    </CalendarWrapper>
  );
};

export default CalendarComponent;

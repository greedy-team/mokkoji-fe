import Calendar from "react-calendar";
import styled from "styled-components";

export const CustomCalendar = styled(Calendar)`
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

  .highlight-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 5px;
    cursor: pointer;
  }

  .highlight-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.7rem;
    white-space: nowrap;
  }

  .highlight-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: gray !important;
    opacity: 0.5;
  }
  .react-calendar__tile--active {
    background-color: #e0e0e0 !important;
    color: black !important;
    border-radius: 8px;
  }
`;

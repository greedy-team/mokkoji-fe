import { useState } from "react";
import useHighlightedDates from "../../utils/useHighlightedDates";
import styled from "styled-components";

const ClickSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 5px;
  cursor: pointer;
`;
interface CalendarItemProps {
  date: Date;
}

function CalendarItem({ date }: CalendarItemProps) {
  const highlightedDates = useHighlightedDates();
  const [expandedDates, setExpandedDates] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = (key: string) => {
    if (highlightedDates[key].length <= 3) return;
    setExpandedDates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const key = date.toISOString().split("T")[0];
  const clubs = highlightedDates[key] || [];
  const expanded = expandedDates[key];

  return clubs.length ? (
    <div className="highlight-container" onClick={() => toggleExpand(key)}>
      {!expanded ? (
        <>
          {clubs.slice(0, 3).map((club, i) => (
            <div key={i} className="highlight-item">
              <div
                className="highlight-dot"
                style={{ backgroundColor: club.color }}
              />
              <span>{club.name}</span>
            </div>
          ))}
          {clubs.length > 3 && <span>...</span>}
        </>
      ) : (
        <ClickSection className="highlight-item">
          {clubs.map((club, i) => (
            <div key={i} className="highlight-item">
              <div
                className="highlight-dot"
                style={{ backgroundColor: club.color }}
              />
              <span>{club.name}</span>
            </div>
          ))}
        </ClickSection>
      )}
    </div>
  ) : null;
}

export default CalendarItem;

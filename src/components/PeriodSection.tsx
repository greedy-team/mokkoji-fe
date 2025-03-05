import useDateUtil from "@/utils/useDateUtil";
import styled from "styled-components";

interface PeriodSectionProps {
  startDate: string | undefined;
  endDate: string | undefined;
  size?: number;
  simple?: boolean;
}

const CustomSpan = styled.span<{ $size?: number }>`
  font-size: ${({ $size }) => ($size ? `${$size}rem` : "0.6rem")};
  text-align: center;
`;

function PeriodSection({
  startDate,
  endDate,
  size,
  simple = false,
}: PeriodSectionProps) {
  const isEndOfYear = useDateUtil(endDate);

  return (
    <>
      {isEndOfYear ? (
        "상시모집"
      ) : (
        <CustomSpan $size={size}>
          {simple
            ? `${startDate} ~ ${endDate}`
            : `모집시작: ${startDate}~ 모집마감: ${endDate}`}
        </CustomSpan>
      )}
    </>
  );
}

export default PeriodSection;

import { STATUS } from "../const/STATUS";

export const useGetStatus = (date: string | undefined) => {
  if (!date) {
    return STATUS.CLOSED; //없을 시 상태 의견 필요
  }
  const endDate = new Date(date);
  const koreaTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Seoul",
  });
  const today = new Date(koreaTime);

  endDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const due = Math.floor(
    (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
  );

  if (due < 0) return STATUS.CLOSED;
  else if (due <= 3) return STATUS.URGENT; 
  else return STATUS.OPEN;
};

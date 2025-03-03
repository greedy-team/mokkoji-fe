function useDateUtil(recruitEndDate: string | undefined) {
  if (recruitEndDate === undefined) {
    return false;
  }
  const koreaYearEnd = new Date(
    Date.UTC(new Date().getFullYear(), 11, 31, 14, 59, 59)
  );
  console.log(koreaYearEnd);

  const recruitEnd = new Date(recruitEndDate);
  const isEndOfYear =
    recruitEnd.getFullYear() === koreaYearEnd.getFullYear() &&
    recruitEnd.getMonth() === koreaYearEnd.getMonth() &&
    recruitEnd.getDate() === koreaYearEnd.getDate();

  return isEndOfYear;
}
export default useDateUtil;

// export function getFormattedDate(date) {
//   return date.toISOString().slice(0, 10);
// }
export function getFormattedDate(date) {
  if (!date || isNaN(date.getTime())) {
    return "";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getDateMinusDays(date, days) {
  const resultDate = new Date(date);
  resultDate.setDate(date.getDate() - days);
  return resultDate;
  // return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

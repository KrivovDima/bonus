export function formattingDate(date: string | null): string | null {
  if (!date) {
    return null;
  }

  const dateObj = new Date(date);
  const differenceStandardMonthAndMachine = 1;
  const valueTen = 10;
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + differenceStandardMonthAndMachine;
  const formattedDay = day < valueTen ? `0${day}` : day;
  const formattedMonth = month < valueTen ? `0${month}` : month;
  return `${formattedDay}.${formattedMonth}`;
}

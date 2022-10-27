import dayjs from 'dayjs';

export const showDate = date => {
  if (!date) {
    return 'DD/MM/YYYY';
  }
  return dayjs(date).format('DD/MM/YYYY');
};

export const getYears = date => {
  const takeYears = date.slice(6);
  return dayjs().diff(takeYears, 'years', false);
};

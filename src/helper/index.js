import moment from 'moment';

export const showDate = date => {
  if (!date) {
    return 'DD/MM/YYYY';
  }
  return moment(date).format('DD/MM/YYYY');
};

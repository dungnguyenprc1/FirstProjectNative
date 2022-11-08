import dayjs from 'dayjs';

export const fullnameRegex =
  /^[^-\s\d][a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]{12,255}$/;
export const usernameRegex = /^[a-zA-Z0-9]+$/;

export const idRegex = /^[\w-_.][0-9]{9,15}$/;
export const phoneRegex =
  /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const regexPassword = {
  atLeast6character: /.{6,}/g,
  atLeastOneNumeric: /[0-9]/g,
  atLeastOneLowercase: /[a-z]/g,
  atLeastOneUppercase: /[A-Z]/g,
  atLeastOneSpecialChar: /[!@#$%^&*()-+]/g,
};
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

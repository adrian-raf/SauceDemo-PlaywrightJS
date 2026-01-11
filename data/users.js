const generalPassword = process.env.PASSWORD_USERS;

export const USERS = {
  STANDARD: {
    username: 'standard_user',
    password: generalPassword,
  },
  LOCKED: {
    username: 'locked_out_user',
    password: generalPassword,
  },
  INVALID: {
    username: 'antekaseng',
    password: generalPassword,
  },
};

export const CHECKOUT_DATA = {
  firstName: 'Valentina',
  lastName: 'Nganjuk',
  zip: '12345',
};

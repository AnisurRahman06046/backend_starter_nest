import slugify from 'slugify';

// generate otp
export const genOtp = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

// generate alpha numeric code
export const genAlphaNumericCode = (length: number) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateRandomNumber = (length: number) => {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const slugifyString = (str: string) => {
  const slug = slugify(str, {
    trim: true,
    replacement: '-',
    remove: undefined,
    lower: true,
  });
  return slug + '-' + generateRandomNumber(4);
};

export const getPaddedCode = (val: number) => {
  return val.toString().padStart(8, '0');
};

export const getPaginationData = (payload: any) => {
  let { page, limit } = payload;
  page = Number(page || 1);
  limit = Number(limit || 10);
  const skip = (page - 1) * limit;
  return { skip, limit, page };
};

export const toBool = (value: any): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value === 'true';
  return false;
};

export const toNumber = (value: any): number => {
  return Number(value);
};

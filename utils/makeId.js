export const makeId = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    const randomIdx = Math.floor(Math.random() * characters.length);
    result += characters[randomIdx];
  }

  return result;
};

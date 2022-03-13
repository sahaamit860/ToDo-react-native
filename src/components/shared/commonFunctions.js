export const randomAlphaNumericGenerator = limit => {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  var result = '';
  for (var i = limit; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

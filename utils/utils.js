module.exports.add = (a, b) => a + b;
module.exports.aSyncAdd = (a, b, callback) => setTimeout(() => callback(a + b), 100);
module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

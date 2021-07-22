type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (user: objWithName) => {
  console.log(user);
};

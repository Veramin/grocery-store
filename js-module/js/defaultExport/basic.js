// About basic information
const basicInfor = {
  name: 'chenchen',
  age: 24,
  gender: 'female'
}
// About user's hobby1
const hobby1 = 'sleep sleep sleep'
// About user's hobby2
const hobby2 = 'eat eat eat'
const dosomething = (something) => 'I like' + something + '.'

// export default { hobby, dosomething }
export default dosomething
export { basicInfor, hobby1, hobby2 }

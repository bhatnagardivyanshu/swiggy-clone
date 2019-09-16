// max exclusive, min inclusive
export const getRandomElementFromArr = (max = 1, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const convertTextCase = (text, type = 'snake') => {
  switch (type) {
    case 'snake':
      return text
        .toLowerCase()
        .split(' ')
        .join('_')
    default:
      return text
  }
}

export default this

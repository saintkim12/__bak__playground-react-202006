
const changeHeader = (header) => {
  console.log('changeHeader', header)
  return { type: 'CHANGE_HEADER', header }
}

export { changeHeader }

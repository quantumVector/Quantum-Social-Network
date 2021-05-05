export const required = value => {
  if (value) return undefined;

  return 'Filed is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
  console.log(value)
  if (value.length > maxLength) return `Max length if ${maxLength} symbols`;

  return undefined;
}
const convertDate = (date: number) => {
  const newDate = new Date(date);

  return newDate.toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).replace(',', '');
}

export default convertDate
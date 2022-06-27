type IUserName = {
  name: string;
  patronymic: string;
  surname: string;
};

const convertUser = ({ name, patronymic, surname }: IUserName) => {
  return `${surname} ${name[0]}.${patronymic[0]}`.replace('Ф��досеева', 'Фeдосеева')
};

export default convertUser;

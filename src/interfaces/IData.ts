export interface IData {
  id: number;
  created_date: number;
  account: { name: string; oguid: string };
  created_user: {
    name: string;
    oguid: string;
    patronymic: string;
    surname: string;
  };
  order_type: { name: string; oguid: string };
  status: string;
  terminal: { name: string; oguid: string };
}

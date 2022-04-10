export interface Cart {
  uuid: string;
  id: number;
  name: string;
  type: string;
  fav: boolean;
  quantity: number;
  date?: number;
  price: number;
}

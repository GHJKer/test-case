export interface State {
  isLogged: boolean | null;
  profileData: Profile | null;
  profileOrders: Order[] | null;
}

export interface Order {
  id: number;
  name: string;
  address: string;
  date: string;
  status: string;
  comment: string;
}

export interface Profile {
  user: string;
  name: string;
  role: string;
}

export default  interface Book {
  title?: string;
  isbn?: string;
  pageCount?: number;
  publishedDate?: {
    $date?: string;
  };
  thumbnailUrl?: string;
  shortDescription?: string;
  longDescription?: string | undefined;
  status?: string;
  authors?: string | string[];
  categories?: string[];
  id?:number;
}

export  interface Admins {
  adminId: number;
  name: string;
  lastName: string;
  age: number;
  password: string;
}

export  interface Users {
  userId: number;
  name: string;
  lastName: string;
  age: number;
  password: string;
}

export interface Details {
  name:string;
  password:string;

}
interface BoosksAndQuantity {
  category: string;
  numberOfbooks: number;
  id:number;
}
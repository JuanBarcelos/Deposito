export type Product = {
  id: number;
  name: string;
  price: number;
  imageUri: string;
  quantidade: number;
}

export type OrderLocationData = {
  latitude: number;
  longitude: number;
  address: string;
}

type ProductId ={
  id: number;
}

export type OrderPayload = {
  products: ProductId[];
}& OrderLocationData;
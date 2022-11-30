export type Pizza = {
  id: string
  title: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
  rating: number
  description: string
}

export type Dessert = {
  id: string
  title: string
  price: number
  imageUrl: string
  description: string
}

export type Snacks = {
  id: string
  title: string
  price: number
  imageUrl: string
  description: string
}

export type Combo = {
  id: string
  title: string
  price: number
  oldPrice: number
  imageUrl: string
  description: string
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchProductParams = {
  productName: string
}

export type ProductUnion = Pizza | Dessert | Snacks | Combo

export interface Product {
  pizzas: Pizza[]
  desserts: Dessert[]
  snacks: Snacks[]
  combo: Combo[]
}

// type Getters<Type> = {
//   [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
// }

export interface ProductSliceState {
  products: Product
  selectMenu: Array<Product>
  status: Status
}

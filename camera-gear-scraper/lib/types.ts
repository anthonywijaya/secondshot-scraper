export interface Item {
    id: number
    name: string
    price: number
    seller: string
    sellerRating: number
    sellerReviews: number
    lastChecked: string
    url: string
    priceHistory: { date: string; price: number }[]
    image: string
    description: string
  }
  
  export interface Group {
    searchTerms: string[]
    items: Item[]
  }
  
  export interface GroupedItems {
    [key: string]: Group
  }
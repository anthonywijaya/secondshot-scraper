import { GroupedItems } from './types'

export const cameraGearDatabase = [
  "Sony A7 III",
  "Sony A7R IV",
  "Sony A9 II",
  "Sony FE 24-70mm f/2.8 GM",
  "Sony FE 70-200mm f/2.8 GM OSS",
  "Canon EOS R5",
  "Canon EOS R6",
  "Canon RF 24-70mm f/2.8L IS USM",
  "Nikon Z6 II",
  "Nikon Z7 II",
  "Nikon Z 24-70mm f/2.8 S",
]

export const initialGroupedItems: GroupedItems = {
  "Sony FE 24-70mm f/2.8 GM": {
    searchTerms: ["Sony 24-70", "FE 24-70 GM"],
    items: [
      { 
        id: 1, 
        name: "Sony 24-70mm f/2.8 G Master Lens", 
        price: 22000000, 
        seller: "CameraStore",
        sellerRating: 4.8,
        sellerReviews: 1500,
        lastChecked: "2023-06-15T10:30:00Z",
        url: "https://www.tokopedia.com/camerastore/sony-24-70mm-f2-8-g-master-lens",
        priceHistory: [
          { date: "2023-06-01", price: 22500000 },
          { date: "2023-06-08", price: 22250000 },
          { date: "2023-06-15", price: 22000000 },
        ],
        image: "/placeholder.svg",
        description: "Sony FE 24-70mm f/2.8 GM adalah lensa zoom standar profesional untuk kamera full-frame Sony E-mount.",
      },
    ]
  },
  "Sony A7 III": {
    searchTerms: ["Sony A7III", "A7 Mark 3"],
    items: [
      { 
        id: 2, 
        name: "Sony A7 III Mirrorless Camera", 
        price: 18000000, 
        seller: "ElectronicsHub",
        sellerRating: 4.9,
        sellerReviews: 2000,
        lastChecked: "2023-06-15T10:30:00Z",
        url: "https://www.tokopedia.com/electronicshub/sony-a7-iii-mirrorless-camera",
        priceHistory: [
          { date: "2023-06-01", price: 18500000 },
          { date: "2023-06-08", price: 18250000 },
          { date: "2023-06-15", price: 18000000 },
        ],
        image: "/placeholder.svg",
        description: "Sony A7 III adalah kamera mirrorless full-frame yang powerful dengan sensor 24.2MP dan kemampuan video 4K.",
      },
    ]
  }
}
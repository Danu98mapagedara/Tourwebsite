export interface Accommodation {
  id: string
  name: string
  location: string
  stars: number
  pricePerNight: number
  facilities: string[]
  image: string
}

export const accommodations: Accommodation[] = [
  {
    id: "1",
    name: "Rivora Residence",
    location: "Kandy",
    stars: 4,
    pricePerNight: 17000,
    facilities: ["Breakfast included", "Free cancellation", "24/7 Service"],
    image: "/assets/kandy-hotel.jpg"
  },
  {
    id: "2",
    name: "Lake View Villa",
    location: "Kandy",
    stars: 3,
    pricePerNight: 10500,
    facilities: ["Free WiFi", "Air Conditioning", "Restaurant"],
    image: "/assets/lake-villa.jpg"
  },
  {
    id: "3",
    name: "Palm Resort",
    location: "Jaffna",
    stars: 5,
    pricePerNight: 25000,
    facilities: ["Breakfast", "Swimming Pool", "Gym Access"],
    image: "/assets/jaffna-resort.jpg"
  }
]

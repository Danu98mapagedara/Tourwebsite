export interface Accommodation {
  id: string
  name: string
  location: string
  stars: number
  price: number
  facilities: string[]
  image: string[]
  about?: string[]
  rating?: number
  address?: string
  locationText?: string
  priceMatch?: boolean
}

import image1  from '../assets/h1.jpg';
import image2  from '../assets/h2.jpg';
import image3  from '../assets/h3.jpg';
import slideimage1  from '../assets/slideimage1.jpg';
import slideimage2  from '../assets/slideimage2.jpg';



export const accommodations: Accommodation[] = [
  {
    id: "1",
    name: "Rivora Residence",
     rating: 3,
    address: "19 Keerthi Sri Rajasinghe Mawatha 09, 20000 Kandy, Sri Lanka",
    locationText: "Great location - show map",
    priceMatch: true,
    location: "Kandy",
    stars: 4,
    price: 17000,
    facilities: ["Breakfast included", "Free cancellation", "24/7 Service"],
    image: [image1, slideimage1, slideimage2, image3],
    about: ["Comfortable Accommodations: 360 Viewpoint by Queens Mount in Kandy offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a work desk, TV, and free WiFi, ensuring a pleasant stay.",
"Leisure Facilities: Guests can relax on the sun terrace or take a dip in the indoor swimming pool. Additional facilities include an outdoor seating area, balcony with scenic views, and a fitness centre.",
"Dining Options: The hotel serves a variety of breakfast options, including continental, full English/Irish, vegetarian, vegan, halal, Asian, and more. Dining areas provide comfortable spaces for meals.",
"Convenient Location: Located 23 km from Victoria Reservoir Kandy Seaplane Base, the hotel is close to attractions such as Kandy Museum (1.7 km) and Sri Dalada Maligawa (1.7 km). Free on-site private parking is available."]
  },
  {
    id: "2",
    name: "Lake View Villa",
    location: "Kandy",
    stars: 3,
    price: 10500,
    facilities: ["Free WiFi", "Air Conditioning", "Restaurant"],
    image:[
      slideimage1,
      slideimage2

    ] ,
        about: ["Comfortable Accommodations: 360 Viewpoint by Queens Mount in Kandy offers family rooms with air-conditioning, private bathrooms, and modern amenities. Each room includes a work desk, TV, and free WiFi, ensuring a pleasant stay.",
"Leisure Facilities: Guests can relax on the sun terrace or take a dip in the indoor swimming pool. Additional facilities include an outdoor seating area, balcony with scenic views, and a fitness centre.",
"Dining Options: The hotel serves a variety of breakfast options, including continental, full English/Irish, vegetarian, vegan, halal, Asian, and more. Dining areas provide comfortable spaces for meals.",
"Convenient Location: Located 23 km from Victoria Reservoir Kandy Seaplane Base, the hotel is close to attractions such as Kandy Museum (1.7 km) and Sri Dalada Maligawa (1.7 km). Free on-site private parking is available."]
  },

  {
    id: "3",
    name: "Palm Resort",
     rating: 3,
    address: "19 Keerthi Sri Rajasinghe Mawatha 09, 20000 Kandy, Sri Lanka",
    locationText: "Great location - show map",
    priceMatch: true,
    location: "Jaffna",
    stars: 5,
    price: 25000,
    facilities: ["Breakfast", "Swimming Pool", "Gym Access"],
    image:[image3]
  },
  {
    id: "4",
    name: "Ocean View Hotel",
     rating: 3,
    address: "19 Keerthi Sri Rajasinghe Mawatha 09, 20000 Kandy, Sri Lanka",
    locationText: "Great location - show map",
    priceMatch: true,
    location: "Jaffna",
    stars: 4,
    price: 25000,
    facilities: ["Breakfast", "Swimming Pool", "Gym Access"],
    image: [image2, slideimage1]
  },
  {
    id: "5",
    name: "Heritance Kandalama",
    location: "Anuradhapura",
    stars: 5,
     rating: 3,
    address: "19 Keerthi Sri Rajasinghe Mawatha 09, 20000 Kandy, Sri Lanka",
    locationText: "Great location - show map",
    priceMatch: true,
    price: 30000,
    facilities: ["Breakfast", "Swimming Pool", "Gym Access"],
    image: ["src/assets/h1.jpg"]
  },
  {
    id: "6",
    name: "Cinnamon Grand",
    location: "Kandy",
    stars: 5,
     rating: 3,
    address: "19 Keerthi Sri Rajasinghe Mawatha 09, 20000 Kandy, Sri Lanka",
    locationText: "Great location - show map",
    priceMatch: true,
    price: 35000,
    facilities: ["Spa", "Free WiFi", "Airport Shuttle"],
                    image:["src/assets/h2.jpg"] 
  }

]

export  interface Vehicle{
    id: number
    name: string
    cartype: string
    pricePerDay: number
    image: string
    capacity: number
    features: string[]
    about?: string[]
    rating?: number
    location?: string
    bookedDates?: string[]
    numberofSeats?: number
    transmission?: string
    mileage?: string
    airConditioned?: boolean
}

import car1 from '../assets/car1.jpeg'
import car2 from '../assets/car2.jpeg'
import car3 from '../assets/car3.jpeg'


const vehicle: Vehicle[] = [{
    id: 1,
    name: "Toyota Corolla",
    cartype: "small",
    pricePerDay: 5000,
    image: car1,
    capacity: 5,
    features: ["Air Conditioning", "Automatic Transmission", "Bluetooth"],
    about: [
        "The Toyota Corolla is a compact sedan known for its reliability and fuel efficiency.",
    ],
    rating: 4.5,
    location: "New York",
    bookedDates: ["2023-10-01", "2023-10-05"],
    numberofSeats: 6,
    transmission: "automatic",
    mileage: "limited",
    airConditioned: true
},
{
    id: 2,
    name: "Honda CR-V",
    cartype: "suv",
    pricePerDay: 8000,
    image: car2,
    capacity: 7,

    features: ["All-Wheel Drive", "Sunroof", "Navigation System"],
    about: [
        "The Honda CR-V is a spacious SUV perfect for family trips and off-road adventures.",
    ],
    rating: 4.7,
    location: "Los Angeles",
    bookedDates: ["2023-10-10", "2023-10-15"],
    numberofSeats: 7,
    transmission: "automatic",
    mileage: "limited",
    airConditioned: true
},
{
    id: 3,
    name: "Ford Mustang",
    cartype: "large",
    pricePerDay: 12000,
    image: car3,
    capacity: 4,
    features: ["V8 Engine", "Leather Seats", "Premium Sound System"],
    about: [    
        "The Ford Mustang is a classic American muscle car known for its powerful performance and iconic design.",
    ],  
    rating: 4.8,
    location: "Miami",
    bookedDates: ["2023-11-01", "2023-11-05"],
    numberofSeats: 4,
    transmission: "Automatic",
    mileage: "unlimited",
    airConditioned: true
},
{
    id: 4,
    name: "Ford Mustang",
    cartype: "large",
    pricePerDay: 12000,
    image: car3,
    capacity: 4,
    features: ["V8 Engine", "Leather Seats", "Premium Sound System"],
    about: [    
        "The Ford Mustang is a classic American muscle car known for its powerful performance and iconic design.",
    ],  
    rating: 4.8,
    location: "Miami",
    bookedDates: ["2023-11-01", "2023-11-05"],
    numberofSeats: 4,
    transmission: "automatic",
    mileage: "unlimited",
    airConditioned: true
},
{
    id: 5,
    name: "Ford Mustang",
    cartype: "large",
    pricePerDay: 12000,
    image: car3,
    capacity: 4,
    features: ["V8 Engine", "Leather Seats", "Premium Sound System"],
    about: [    
        "The Ford Mustang is a classic American muscle car known for its powerful performance and iconic design.",
    ],  
    rating: 4.8,
    location: "Miami",
    bookedDates: ["2023-11-01", "2023-11-05"],
    numberofSeats: 6,
    transmission: "manual",
    mileage: "unlimited",
    airConditioned: true
},
{
    id: 6,
    name: "Ford Mustang",
    cartype: "large",
    pricePerDay: 12000,
    image: car3,
    capacity: 4,
    features: ["V8 Engine", "Leather Seats", "Premium Sound System"],
    about: [    
        "The Ford Mustang is a classic American muscle car known for its powerful performance and iconic design.",
    ],  
    rating: 4.8,
    location: "Miami",
    bookedDates: ["2023-11-01", "2023-11-05"],
    numberofSeats: 6,
    transmission: "manual",
    mileage: "unlimited",
    airConditioned: true
},
]
export default vehicle;
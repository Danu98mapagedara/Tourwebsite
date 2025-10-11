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

const vehicle: Vehicle[] = [{
    id: 1,
    name: "Toyota Corolla",
    cartype: "Sedan",
    pricePerDay: 5000,
    image: "https://example.com/toyota_corolla.jpg",
    capacity: 5,
    features: ["Air Conditioning", "Automatic Transmission", "Bluetooth"],
    about: [
        "The Toyota Corolla is a compact sedan known for its reliability and fuel efficiency.",
    ],
    rating: 4.5,
    location: "New York",
    bookedDates: ["2023-10-01", "2023-10-05"],
    numberofSeats: 5,
    transmission: "Automatic",
  
    mileage: "30 km/l",
    airConditioned: true
},
{
    id: 2,
    name: "Honda CR-V",
    cartype: "SUV",
    pricePerDay: 8000,
    image: "https://example.com/honda_crv.jpg",
    capacity: 7,

    features: ["All-Wheel Drive", "Sunroof", "Navigation System"],
    about: [
        "The Honda CR-V is a spacious SUV perfect for family trips and off-road adventures.",
    ],
    rating: 4.7,
    location: "Los Angeles",
    bookedDates: ["2023-10-10", "2023-10-15"],
    numberofSeats: 7,
    transmission: "Automatic",
   
    mileage: "28 km/l",
    airConditioned: true
},
{
    id: 3,
    name: "Ford Mustang",
    cartype: "Coupe",
    pricePerDay: 12000,
    image: "https://example.com/ford_mustang.jpg",
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
    mileage: "25 km/l",
    airConditioned: true
},
]
export default vehicle;
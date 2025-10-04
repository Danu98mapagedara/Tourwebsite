export interface Tour {
  id: string
  name: string
  overview: string
   days: number
  places: string[]
   image: string
  facilities: {
    hotel: string
    lunch: string
    guide: string
    tickets: string
   
   
  }
}

import  image1  from '../assets/jaffna.jpg';
import  image2  from '../assets/kandy.jpg';

export const tours: Tour[] = [
  {
    id: "kandy",
    name: "Kandy Tour",
    image: image2,
      days: 3,
    overview:
      "Explore the cultural capital of Sri Lanka with breathtaking views and historic landmarks.",
    
    places: [
      "Temple of the Tooth Relic (Dalada Maligawa)",
      "Peradeniya Botanical Garden",
      "Ambuluwawa Tower & Cable Car Experience",
      "Garadiallu Waterfall",
      "Galpoththa",
      "Kabaragala Hike"
    ],
    facilities: {
      hotel: "4-Star Hotel Accommodation",
      lunch: "Daily Lunch Included",
      guide: "24-hour Professional Tour Guide",
      tickets: "All Entry Ticket Fees Included",
    
    }
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura Tour",
      days: 2,
    overview:
      "Discover the ancient capital of Sri Lanka with sacred temples and ruins.",
    image: "src/assets/anuradhapura.jpg",
    places: [
      "Ruwanwelisaya Stupa",
      "Sri Maha Bodhi",
      "Jetavanaramaya",
      "Isurumuniya Temple"
    ],
    facilities: {
      hotel: "3-Star Hotel Accommodation",
      lunch: "Traditional Sri Lankan Lunch",
      guide: "Certified Historical Guide",
      tickets: "All Monument Entry Passes",
    
    }
  },
  {
    id: "jaffna",
    name: "Jaffna Tour",
          days: 4,
    overview:
      "Experience the northern heritage of Sri Lanka with cultural richness and coastal beauty.",
    image: image1,
    places: [
      "Nallur Kandaswamy Temple",
      "Jaffna Fort",
      "Casuarina Beach",
      "Nagadeepa Island"
    ],
    facilities: {
      hotel: "4-Star Hotel Accommodation",
      lunch: "Seafood Special Lunch",
      guide: "Local Bilingual Guide",
      tickets: "Ferry & Temple Tickets Included",

    }
  }
]

export  interface Feedback {
  id: number;
  name: string;
  country: string;
  feedback: string;
  image: string;
}


export  const feedbackData:Feedback[]=[
    {
    id: 1,
    name: "Sarah Johnson",
    country: "United Kingdom",
    feedback: "Our trip to Sri Lanka was unforgettable! The tour was perfectly organized, and the guide was amazing.",
    image: "/images/client1.jpg",
  },
  {
    id: 2,
    name: "Kenji Tanaka",
    country: "Japan",
    feedback: "The cultural experience was incredible. We really enjoyed every moment of the journey!",
    image: "/images/client2.jpg",
  },
  {
    id: 3,
    name: "Emma Brown",
    country: "Australia",
    feedback: "Beautiful scenery, friendly people, and excellent service. Highly recommended!",
    image: "/images/client3.jpg",
  },

    {
    id: 4,
    name: "Emma Brown",
    country: "Australia",
    feedback: "Beautiful scenery, friendly people, and excellent service. Highly recommended!",
    image: "/images/client3.jpg",
  },
]

import Image from 'next/image';

const image1 = '/img/event/Facebook-post-18.png';
const image2 = '/img/event/Facebook-post-18.png';
const image3 = '/img/event/Facebook-post-18.png';

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
  description?: string;
}

const eventsData: Event[] = [
  {
    id: 1, 
    name: "Meet ", 
    date: "2024-05-06", 
    time: "18:00 - 20:00",
    image: image1,
    description: "Join us to improve your skills in a relaxed after-work environment."
  },
  { 
    id: 2, 
    name: "Networking Event", 
    date: "2024-05-07", 
    time: "18:00 - 20:00",
    image: image2,
    description: "An opportunity to meet like-minded professionals and expand your network."
  },
  { 
    id: 3, 
    name: "Tech Workshop", 
    date: "2024-05-08", 
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  { 
    id: 4, 
    name: "Tech Workshop", 
    date: "2024-05-09", 
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  { 
    id: 5, 
    name: "Tech Workshop", 
    date: "2024-05-10", 
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
];

export default eventsData;

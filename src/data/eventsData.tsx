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
    name: "Meet",
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
  {
    id: 6,
    name: "Meet",
    date: "2024-05-11",
    time: "18:00 - 20:00",
    image: image1,
    description: "Join us to improve your skills in a relaxed after-work environment."
  },
  {
    id: 7,
    name: "Networking Event",
    date: "2024-05-12",
    time: "18:00 - 20:00",
    image: image2,
    description: "An opportunity to meet like-minded professionals and expand your network."
  },
  {
    id: 8,
    name: "Tech Workshop",
    date: "2024-05-13",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 9,
    name: "Tech Workshop",
    date: "2024-05-14",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 10,
    name: "Tech Workshop",
    date: "2024-05-15",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 11,
    name: "Meet",
    date: "2024-05-16",
    time: "18:00 - 20:00",
    image: image1,
    description: "Join us to improve your skills in a relaxed after-work environment."
  },
  {
    id: 12,
    name: "Networking Event",
    date: "2024-05-17",
    time: "18:00 - 20:00",
    image: image2,
    description: "An opportunity to meet like-minded professionals and expand your network."
  },
  {
    id: 13,
    name: "Tech Workshop",
    date: "2024-05-18",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 14,
    name: "Tech Workshop",
    date: "2024-05-19",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 15,
    name: "Tech Workshop",
    date: "2024-05-20",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 16,
    name: "Meet",
    date: "2024-05-21",
    time: "18:00 - 20:00",
    image: image1,
    description: "Join us to improve your skills in a relaxed after-work environment."
  },
  {
    id: 17,
    name: "Networking Event",
    date: "2024-05-22",
    time: "18:00 - 20:00",
    image: image2,
    description: "An opportunity to meet like-minded professionals and expand your network."
  },
  {
    id: 18,
    name: "Tech Workshop",
    date: "2024-05-23",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 19,
    name: "Tech Workshop",
    date: "2024-05-24",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 20,
    name: "Tech Workshop",
    date: "2024-05-25",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 21,
    name: "Meet",
    date: "2024-05-26",
    time: "18:00 - 20:00",
    image: image1,
    description: "Join us to improve your skills in a relaxed after-work environment."
  },
  {
    id: 22,
    name: "Networking Event",
    date: "2024-05-27",
    time: "18:00 - 20:00",
    image: image2,
    description: "An opportunity to meet like-minded professionals and expand your network."
  },
  {
    id: 23,
    name: "Tech Workshop",
    date: "2024-05-28",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 24,
    name: "Tech Workshop",
    date: "2024-05-29",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 25,
    name: "Tech Workshop",
    date: "2024-05-30",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 26,
    name: "Meet",
    date: "2024-06-01",
    time: "18:00 - 20:00",
    image: image1,
    description: "Join us to improve your skills in a relaxed after-work environment."
  },
  {
    id: 27,
    name: "Networking Event",
    date: "2024-06-02",
    time: "18:00 - 20:00",
    image: image2,
    description: "An opportunity to meet like-minded professionals and expand your network."
  },
  {
    id: 28,
    name: "Tech Workshop",
    date: "2024-06-03",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 29,
    name: "Tech Workshop",
    date: "2024-06-04",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  },
  {
    id: 30,
    name: "Tech Workshop",
    date: "2024-06-05",
    time: "18:00 - 20:00",
    image: image3,
    description: "Hands-on workshop where you'll learn practical tech skills."
  }
];

export default eventsData;

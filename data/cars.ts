export type Car = {
  id: string;
  name: string;
  brand: string;
  image: string;
  category: string;
  seats: number;
  fuel: string;
  transmission: string;
  price: number;
};

export const cars: Car[] = [
  {
    id: "1",
    name: "BMW 3 Series",
    brand: "BMW",
    image: "/images/bmw.png",
    category: "Luxury",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 80,
  },
  {
    id: "2",
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes",
    image: "/images/mercedes.png",
    category: "Luxury",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 95,
  },
  {
    id: "3",
    name: "Tesla Model 3",
    brand: "Tesla",
    image: "/images/tesla.png",
    category: "Electric",
    seats: 5,
    fuel: "Electric",
    transmission: "Automatic",
    price: 75,
  },
  {
    id: "4",
    name: "Toyota RAV4",
    brand: "Toyota",
    image: "/images/toyota.png",
    category: "SUV",
    seats: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    price: 65,
  },
];

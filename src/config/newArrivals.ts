import bag from "assets/images/bag.png";
import shoe from "assets/images/shoe.png";

export interface TProduct {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  favorite: boolean;
}

const newArrivals: TProduct[] = [
  {
    id: 1,
    title: "The Marc Jacobs",
    subtitle: "Traveler Tote",
    image: bag,
    price: 195.0,
    favorite: true,
  },
  {
    id: 2,
    title: "Axel Arigato",
    subtitle: "Clean 90 Triple Sneakers",
    image: shoe,
    price: 245.0,
    favorite: false,
  },
];

export default newArrivals;

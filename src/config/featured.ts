import featuredBackground from "assets/images/featured.png";

export interface TFeatured {
  id: number;
  offPercentage: number;
  title: string;
  coupon: string;
  image: string;
  actionLabel: string;
}

const featured: TFeatured[] = [
  {
    id: 1,
    offPercentage: 50,
    title: "On everything today",
    coupon: "FSCREATION",
    image: featuredBackground,
    actionLabel: "Get Now",
  },
  {
    id: 2,
    offPercentage: 70,
    title: "On everything today",
    coupon: "FSCREATION",
    image: featuredBackground,
    actionLabel: "Get Now",
  },
];

export default featured;

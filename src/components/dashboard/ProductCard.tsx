import { Heading, Paragraph } from "components/common";

type TProps = {
  title: string;
  subtitle: string;
  image: string;
  price: number;
  favorite: boolean;
  favoriteAction: () => void;
};

const ProductCard: React.FC<TProps> = ({
  title,
  subtitle,
  image,
  price,
  favorite,
  favoriteAction,
}) => {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <Heading size="sm" className="text-center">
        {title}
      </Heading>
      <Paragraph className="text-neutral-600">{subtitle}</Paragraph>
      <Heading size="sm" className="text-center font-semibold">
        ${price.toFixed(2)}
      </Heading>
    </div>
  );
};

export default ProductCard;

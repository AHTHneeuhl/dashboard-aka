import { Button, Heading, Paragraph } from "components/common";

type TProps = {
  offPercentage: number;
  title: string;
  coupon: string;
  image: string;
  actionLabel: string;
  onAction?: () => void;
};

const FeaturedCard: React.FC<TProps> = ({
  offPercentage,
  title,
  coupon,
  image,
  actionLabel,
  onAction,
}) => {
  return (
    <div
      className="rounded-2xl w-80 shadow-sm bg-cover bg-center px-5 py-7"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Heading size="lg">{offPercentage}% Off</Heading>
      <Paragraph size="xl" className="text-start">
        {title}
      </Paragraph>
      <Paragraph variant="secondary" className="text-start text-neutral-600">
        With code: {coupon}
      </Paragraph>
      <Button onClick={onAction} size="sm">
        {actionLabel}
      </Button>
    </div>
  );
};

export default FeaturedCard;

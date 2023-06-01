import { Button, Heading, Paragraph } from "components/common";
import { TOrder } from "types";

interface DefaultProps extends Omit<TOrder, "id"> {
  orderId: number;
}
const OrderCard: React.FC<DefaultProps> = ({
  title,
  price,
  placedOn,
  status,
  logo,
  quantity,
}) => {
  return (
    <div className="text-center shaodow-sm rounded-xl bg-zinc-50 p-4">
      <div className="flex flex-row items-center justify-between">
        <Paragraph className="bg-zinc-100 py-1 px-2 text-sm font-medium rounded-3xl">
          {status}
        </Paragraph>
      </div>
      <div className="overflow-hidden rounded-xl w-48 h-32 opacity-75">
        <img src={logo} alt="logo" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-row items-center justify-between mt-1">
        <Heading size="sm">{title}</Heading>
        <Paragraph className="text-sm font-medium p-0 m-0">
          Quantity {quantity}
        </Paragraph>
      </div>
      <div className="flex flex-row items-center justify-between mt-2">
        <Button size="sm">Cancel</Button>
        <div className="flex flex-col items-end">
          <Paragraph className="text-xs font-medium p-0 m-0">Total</Paragraph>
          <Heading size="sm">${price.toFixed(2)}</Heading>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

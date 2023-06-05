import { useAppSelector } from "redux/store/hooks";
import OrderItem from "./OrderItem";

const ConfirmedList: React.FC = () => {
  const orders = useAppSelector((state) => state.dashboard.orders.orders);

  return (
    <div className="flex flex-col gap-1 h-[56vh] overflow-auto pr-2">
      {orders.map(
        ({ id, title, price, placedOn, logo, subtitle, quantity }) => (
          <OrderItem
            key={id}
            orderId={id}
            title={title}
            price={price}
            placedOn={placedOn}
            subtitle={subtitle}
            logo={logo}
            quantity={quantity}
          />
        )
      )}
    </div>
  );
};

export default ConfirmedList;

import { useAppSelector } from "redux/store/hooks";
import OrderCard from "./OrderCard";

const OrderList: React.FC = () => {
  const orders = useAppSelector((state) => state.dashboard.orders.orders);

  return (
    <div className="flex flex-row flex-wrap items-center gap-5">
      {orders.map(({ id, title, price, placedOn, status, logo, quantity }) => (
        <OrderCard
          key={id}
          orderId={id}
          title={title}
          price={price}
          placedOn={placedOn}
          status={status}
          logo={logo}
          quantity={quantity}
        />
      ))}
    </div>
  );
};

export default OrderList;

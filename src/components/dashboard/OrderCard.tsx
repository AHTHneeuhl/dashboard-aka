import { Button, Heading, Paragraph } from "components/common";
import { useNotification } from "hooks";
import { useCallback, useState } from "react";
import { cancelOrder } from "redux/slices/dashboard";
import { useAppDispatch } from "redux/store/hooks";
import { TOrder } from "types";
import EditOrder from "./EditOrder";

interface DefaultProps extends Omit<TOrder, "id"> {
  orderId: number;
}
const OrderCard: React.FC<DefaultProps> = ({
  orderId,
  title,
  price,
  placedOn,
  status,
  logo,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const { notifySuccess } = useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // handling order cancel with redux & success message
  const onCancelOrder = useCallback(() => {
    dispatch(cancelOrder(orderId));
    notifySuccess("Order canceled successfully");
  }, [dispatch, orderId, notifySuccess]);

  return (
    <div className="text-center shaodow-sm rounded-xl bg-zinc-50 p-4">
      <div className="flex flex-row items-start justify-between mb-1">
        <Paragraph className="bg-zinc-100 py-1 px-2 text-sm font-medium rounded-3xl">
          {status}
        </Paragraph>
        <div className="cursor-pointer" onClick={openModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
          </svg>
        </div>
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
        <Button size="sm" onClick={onCancelOrder}>
          Cancel
        </Button>
        <div className="flex flex-col items-end">
          <Paragraph className="text-xs font-medium p-0 m-0">Total</Paragraph>
          <Heading size="sm">${price.toFixed(2)}</Heading>
        </div>
      </div>
      <EditOrder
        orderId={orderId}
        isOpen={isModalOpen}
        onClose={closeModal}
        status={status}
      />
    </div>
  );
};

export default OrderCard;

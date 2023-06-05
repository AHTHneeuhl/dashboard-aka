import { Heading, Paragraph } from "components/common";
import { useState } from "react";
import { TOrder } from "types";
import EditOrder from "./EditOrder";

import { ReactComponent as SelectIcon } from "assets/icons/select.svg";

interface DefaultProps extends Omit<TOrder, "id" | "status"> {
  orderId: number;
}
const OrderItem: React.FC<DefaultProps> = ({
  orderId,
  title,
  price,
  subtitle,
  placedOn,
  logo,
  quantity,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-7 items-center w-full hover:bg-zinc-50 transition rounded-md p-2 cursor-pointer">
      <div className="flex flex-row items-center gap-4 overflow-hidden">
        <SelectIcon />
        <img
          src={logo}
          alt="logo"
          className="rounded-xl w-20 h-12 opacity-75 object-cover"
        />
      </div>
      <div className="flex col-start-2 col-end-4 flex-col items-start justify-between">
        <Heading size="sm" className="text-md">
          {title}
        </Heading>
        <Paragraph className="text-sm font-medium text-neutral-600">
          {subtitle}
        </Paragraph>
      </div>
      <Paragraph className="text-sm font-medium p-0 m-0 text-start">
        {quantity}
      </Paragraph>
      <Paragraph size="sm" className="text-neutral-600 text-start">
        {price.toFixed(2)}
      </Paragraph>
      <Paragraph size="sm" className="font-medium text-start">
        {placedOn}
      </Paragraph>
      <div className="cursor-pointer justify-end ml-auto" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </svg>
      </div>
      <EditOrder
        isOpen={isModalOpen}
        onClose={closeModal}
        orderId={orderId}
        quantity={quantity}
      />
    </div>
  );
};

export default OrderItem;

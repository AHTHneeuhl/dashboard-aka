import { Button } from "components/common";
import { useCallback, useEffect, useState } from "react";
import { updateOrderStatus } from "redux/slices/dashboard";
import { useAppDispatch } from "redux/store/hooks";

import { TStatus } from "types";

type TProps = {
  orderId: number;
  status: TStatus;
  isOpen: boolean;
  onClose: () => void;
};

const EditOrder: React.FC<TProps> = ({ isOpen, onClose, status, orderId }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const dispatch = useAppDispatch();

  const [selectedStatus, setSelectedStatus] = useState<TStatus>(status);

  // handling modal close
  const handleClose = useCallback(() => {
    setShowModal(false);
    onClose();
  }, [onClose]);

  const handleUpdateOrder = () => {
    dispatch(
      updateOrderStatus({
        id: orderId,
        status: selectedStatus,
      })
    );
    onClose();
  };

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:ountline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full relative ${
            showModal ? "translate-y-0" : "translate-y-full"
          } ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadaw-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center p-6 rounded-t justify-center relative">
              <button
                onClick={handleClose}
                className="p-1 transition absolute right-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative p-6 flex flex-row items-center gap-2 justify-center">
              <div className="flex flex-row gap-2 items-center">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id="status"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as TStatus)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Refunded">Refunded</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center p-6">
              <Button onClick={handleUpdateOrder}>Update Order</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;

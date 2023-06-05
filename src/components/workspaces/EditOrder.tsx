import { Button } from "components/common";
import { useCallback, useEffect, useState } from "react";
import { editOrderQuantity } from "redux/slices/dashboard";
import { useAppDispatch } from "redux/store/hooks";

type TProps = {
  orderId: number;
  quantity: number;
  isOpen: boolean;
  onClose: () => void;
};

const EditOrder: React.FC<TProps> = ({
  isOpen,
  onClose,
  quantity,
  orderId,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const dispatch = useAppDispatch();

  const [selectedQuantity, setSelectedQuantity] = useState<number>(quantity);

  // handling modal close
  const handleClose = useCallback(() => {
    setShowModal(false);
    onClose();
  }, [onClose]);

  const handleUpdateOrder = () => {
    dispatch(
      editOrderQuantity({
        id: orderId,
        quantity: selectedQuantity,
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
                <label htmlFor="status">Quantity</label>
                <input
                  type="text"
                  value={selectedQuantity}
                  onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                  className="border border-blue-300 rounded-xl outline-none focus:outline-none py-2 px-3 font-normal text-sm text-neutral-700"
                />
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

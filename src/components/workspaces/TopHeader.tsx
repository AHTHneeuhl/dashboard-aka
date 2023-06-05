import { Button, Heading } from "components/common";

const TopHeader: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between py-6 border-b mb-6 border-neutral-200">
      <Heading>Order</Heading>
      <Button variant="action" className="rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>{" "}
        Add Order
      </Button>
    </div>
  );
};

export default TopHeader;

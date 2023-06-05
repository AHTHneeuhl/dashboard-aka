import { Heading } from "components/common";

type TDefaultProps = {
  total: number;
};

const ConfirmedHeader: React.FC<TDefaultProps> = ({ total }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <Heading size="sm">Confirmed</Heading>
        <Heading size="sm" variant="secondary" className="text-neutral-500">
          {total}
        </Heading>
      </div>
      <div className="p-1 cursor-pointer rounded-full bg-neutral-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
      </div>
    </div>
  );
};

export default ConfirmedHeader;

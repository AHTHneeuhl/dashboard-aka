import { Heading } from "components/common";

const Issued: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between rounded-3xl border border-neutral-200 p-4">
      <div className="flex flex-row items-center gap-2">
        <Heading size="sm">Issues</Heading>
        <Heading size="sm" variant="secondary" className="text-neutral-500">
          21
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </div>
    </div>
  );
};

export default Issued;

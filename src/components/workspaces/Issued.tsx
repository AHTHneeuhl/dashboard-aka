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
    </div>
  );
};

export default Issued;

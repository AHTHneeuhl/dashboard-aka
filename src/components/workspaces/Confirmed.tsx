import ConfirmedList from "./ConfirmedList";
import Filters from "./Filters";
import ConfirmedHeader from "./ConfirmedHeader";

const Confirmed: React.FC = () => {
  const totalConfirmed = 39;

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-4">
      <ConfirmedHeader total={totalConfirmed} />
      <Filters />
      <ConfirmedList />
    </div>
  );
};

export default Confirmed;

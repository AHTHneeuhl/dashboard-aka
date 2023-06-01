import featured from "config/featured";
import FeaturedCard from "./FeaturedCard";

const Featured: React.FC = () => {
  return (
    <div className="flex flex-row items-center overflow-auto gap-6">
      {featured.map(
        ({ id, title, coupon, offPercentage, image, actionLabel }) => (
          <FeaturedCard
            key={id}
            title={title}
            coupon={coupon}
            offPercentage={offPercentage}
            image={image}
            actionLabel={actionLabel}
          />
        )
      )}
    </div>
  );
};

export default Featured;

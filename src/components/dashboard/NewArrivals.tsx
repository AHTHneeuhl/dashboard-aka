import { Container, Heading } from "components/common";
import newArrivals from "config/newArrivals";
import ProductCard from "./ProductCard";

const NewArrivals: React.FC = () => {
  return (
    <Container>
      <Heading>New Arrivals</Heading>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {newArrivals.map(({ id, title, subtitle, price, image, favorite }) => (
          <ProductCard
            key={id}
            title={title}
            subtitle={subtitle}
            price={price}
            image={image}
            favorite={favorite}
            favoriteAction={() => {}}
          />
        ))}
      </div>
    </Container>
  );
};

export default NewArrivals;

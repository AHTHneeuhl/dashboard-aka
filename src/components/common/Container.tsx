type TProps = {
  children: React.ReactNode;
};

const Container: React.FC<TProps> = ({ children }) => {
  return <div className="mx-auto sm:px-2 px-4">{children}</div>;
};

export default Container;

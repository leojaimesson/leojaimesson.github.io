import "./Container.css";

type ContainerProps = {
  children: preact.ComponentChildren;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};

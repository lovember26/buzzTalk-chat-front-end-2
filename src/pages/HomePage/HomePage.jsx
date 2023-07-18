import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import Title from "components/common/Title/Title";

export const HomePage = () => {
  return (
    <>
      <Title title="Home Page" />;
      <AppToastContainer size={30} />
    </>
  );
};

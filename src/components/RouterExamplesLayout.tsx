import { Outlet } from "react-router";
import Footer from "./Footer";
import HeaderResponsive from "./HeaderResponsive";
import ExampleSection from "./ExampleSection";

const RouterExamplesLayout = () => {
  return (
    <>
      <HeaderResponsive />
      <div className="container mx-auto min-h-[72vh] pt-24">
        <Outlet />
      </div>
      <ExampleSection />
      <Footer />
    </>
  );
};
export default RouterExamplesLayout;

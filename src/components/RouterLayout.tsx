import { Outlet } from "react-router";
import Footer from "./Footer";
import HeaderResponsive from "./HeaderResponsive";
import { Toaster } from "@/components/ui/sonner";

const RouterLayout = () => {
  return (
    <>
      <HeaderResponsive />
      <div className="container mx-auto min-h-[95vh] pt-24">
        <Outlet />
      </div>
      <Footer />
      <Toaster richColors position="top-center" expand={true} />
    </>
  );
};
export default RouterLayout;

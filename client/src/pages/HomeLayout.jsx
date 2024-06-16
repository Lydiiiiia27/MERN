import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav></nav>

      {/* use Outlet to display child page */}
      <Outlet />
    </div>
  );
};
export default HomeLayout;

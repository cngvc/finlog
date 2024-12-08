import { Header } from "@/components/header";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </Fragment>
  );
};

export default DashboardLayout;

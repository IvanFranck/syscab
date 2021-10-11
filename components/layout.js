import Head from "next/head";
import SideBarNav from "./sideBarNavigation";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="container w-screen">
      <Head>
        <title>syscab</title>
      </Head>
      <div className="w-full flex flex-row">
        <SideBarNav />
        <div className="m-9 flex flex-col flex-auto">
          <Header />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

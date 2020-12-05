import React, {FC, ReactElement} from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import SEO from "./Seo";

type Props = {title: string; children: JSX.Element | JSX.Element[]};

const Layout: FC<Props> = ({children}): ReactElement => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* <SEO title={title} /> */}
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

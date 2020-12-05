import React from "react";
// import Layout from "../blocs/common/components/Layout";
import { PageProps } from "gatsby";
import { GetMain } from "./__generated__/GetMain";

type HomeProps = PageProps<GetMain>

export const Home: React.FC<HomeProps> = ({}) => {

  return (
    <div>
     <strong>test</strong>
      {/* <Layout title="home"> */}
        {/* <TroevenList edges={data.allContentfulTroeven.edges} />
        <SpotlightList edges={data.allContentfulSpotlight.edges} /> */}
      {/* </Layout> */}
    </div>
  );
}



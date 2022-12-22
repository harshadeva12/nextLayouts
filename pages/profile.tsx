import React, { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from './_app'


const Profile:  NextPageWithLayout = () => {
  return (
    <div >
      <h3>Profile page</h3>
    </div>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>{page}</Layout>
  )
}


export default Profile;

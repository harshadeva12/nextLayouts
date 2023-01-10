import type { ReactElement } from 'react'
import NestedLayout from '../components/second-layout'
import type { NextPageWithLayout } from './_app'
import { Image } from 'antd';
import CardData from "../components/homePage/card-data";
import Test from "../components/homePage/test";
import Video from "../components/homePage/video"

const Home: NextPageWithLayout = () => {
  return (<div><Test/><CardData/><Video/></div>)

}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
      <NestedLayout>{page}</NestedLayout>
  )
}

export default Home
import type { ReactElement } from 'react'
import NestedLayout from '../components/second-layout'
import ThirdLayout from '../components/third-layout';
import type { NextPageWithLayout } from './_app';
import FormSteps from '../components/formTest/formSteps';

const Home: NextPageWithLayout = () => {
  return (<div><FormSteps/></div>)
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
      <ThirdLayout>{page}</ThirdLayout>
  )
}

export default Home
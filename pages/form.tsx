import type { ReactElement } from 'react'
import NestedLayout from '../components/second-layout'
import type { NextPageWithLayout } from './_app';
import Wizard from '../components/form/wizard'

const Home: NextPageWithLayout = () => {
  return (<div><Wizard/></div>)

}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
      <NestedLayout>{page}</NestedLayout>
  )
}

export default Home
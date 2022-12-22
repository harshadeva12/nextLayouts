import type { ReactElement } from 'react'
import NestedLayout from '../components/second-layout'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <h3>This is vehicle page</h3>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
      <NestedLayout>{page}</NestedLayout>
  )
}

export default Home
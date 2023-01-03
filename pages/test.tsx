import type { ReactElement } from 'react'
import ThirdLayout from '../components/third-layout'
import type { NextPageWithLayout } from './_app'

const TestPage: NextPageWithLayout = () => {
  return <h3>Layout test page</h3>
}

TestPage.getLayout = function getLayout(page: ReactElement) {
  return (
      <ThirdLayout>{page}</ThirdLayout>
  )
}

export default TestPage
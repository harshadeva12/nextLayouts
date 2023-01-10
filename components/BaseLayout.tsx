import Footer from './footer'

export default function BaseLayout(props:any) {
  return (
    <>
      {/* <h5>Common line for both layouts</h5> */}
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
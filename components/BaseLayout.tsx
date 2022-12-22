import Footer from './footer'

export default function BaseLayout({ children }) {
  return (
    <>
      <h5>Common line for both layouts</h5>
      <p>{children.name}</p>
      <main>{children}</main>
      <Footer />
    </>
  )
}
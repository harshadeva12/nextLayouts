import BaseLayout from './BaseLayout'
import Navbar from './footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <BaseLayout >
      <Navbar />
      <main>{children}</main>
      </BaseLayout>
    </>
  );
};

export default Layout;
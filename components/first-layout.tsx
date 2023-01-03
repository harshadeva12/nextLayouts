import BaseLayout from './BaseLayout'
import Navbar from './footer'

const FirstLayout: React.FC = (props:any) => {
  return (
    <>
      <BaseLayout >
      <Navbar />
      <main>{props.children}</main>
      </BaseLayout>
    </>
  );
};

export default FirstLayout;
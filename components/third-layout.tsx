import BaseLayout from './BaseLayout'
import Footer from './footer'

const ThirdLayout: React.FC = (props:any) => {
  return (
    <>
      <p>Authentication pages</p>
      <main>{props.children}</main>
    </>
  );
};

export default ThirdLayout;
import styles from  "../styles/Layout.module.css";
import BaseLayout from "./BaseLayout";

// export default function SecondLayout({ children }) {
//   return (
//     <>
//        <BaseLayout >
//       <ul>
//         <li>second layout</li>
//       </ul>
//       <main>{children}</main>
//       </BaseLayout>
//     </>
//   );
// }

const SecondLayout: React.FC = ({ children }) => {
  return (
    <>
      <BaseLayout>
      <div className={styles.container2}>
        <ul>
          <li>second layout</li>
        </ul>
        <main>{children}</main>
        </div>
      </BaseLayout>
    </>
  );
};

export default SecondLayout;

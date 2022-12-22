import styles from '../../styles/Home.module.css'
import SecondLayout from '../../components/second-layout'

export default function Page() {
    return (
        <div className={styles.container}>
            <h4>Category page &gt; Product page</h4>
        </div>
    )
}

Page.getLayout = function getLayout(page) {
    return (
        <SecondLayout>{page}</SecondLayout>
    )
}
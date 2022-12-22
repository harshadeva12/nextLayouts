import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Item() {
    const routes = useRouter();
    const query = routes.query;
    return (
        <div className={styles.container}>
            <h4>Dynamic Routes</h4>
            <p>{query.menu}</p>
            <p>{query.item}</p>
        </div>
    )
}

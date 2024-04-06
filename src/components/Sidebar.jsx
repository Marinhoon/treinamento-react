import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>

            <img 
            className={styles.cover}
            src="https://img.freepik.com/free-vector/3d-style-black-background-with-paper-layer_206725-669.jpg" 
            />

            <div className={styles.profile}>
                <strong>Cássio Leal</strong>
                <span>Professor de Informática</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );

}
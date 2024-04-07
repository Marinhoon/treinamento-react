import styles from './Sidebar.module.css'
import {PencilLine} from '@phosphor-icons/react'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>

            <img 
            className={styles.cover}
            src="https://img.freepik.com/free-vector/3d-style-black-background-with-paper-layer_206725-669.jpg" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar}src="https://imgur.com/tYnCrOQ.jpg" />
                <strong>Cássio Leal</strong>
                <span>Professor de Informática</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );

}
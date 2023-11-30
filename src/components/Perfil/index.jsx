import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) => {

    return (
        <header className={styles.header}>
            <img className={styles.perfil} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.title}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil
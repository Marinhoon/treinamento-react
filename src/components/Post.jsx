import styles from "./Post.module.css";
import { WhatsappLogo } from "@phosphor-icons/react";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://imgur.com/tYnCrOQ.jpg" />
          <div className={styles.authorInfo}>
            <strong>Cássio Leal</strong>
            <span>Professor de Informática</span>
          </div>
        </div>

        <time title="08 de Abril de 2024" dateTime="2024-04-08 12:00:00">
          Publicado há 1h
        </time>
      </header>
      
      <div className={styles.content}>
        <p>
          Casado, pai de 2 filhas (03 e 01 anos), 33 anos, residente em
          Plataforma (Ilha Amarela) Salvador – BA. Professor e Empreendedor no
          ramo da Informática.
        </p>
        <p>
          Tendo 10 anos de experiência em suporte ao usuário de computador, sem
          férias e com muito vigor. Técnico reconhecido como cordial, eficaz e
          atencioso pelos seus clientes.{" "}
        </p>
        <a href="#">
          <WhatsappLogo size={20} />
          71 99283-4903
        </a>
      </div>
    </article>
  );
}

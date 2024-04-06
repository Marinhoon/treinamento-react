import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from './components/Sidebar';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className='wrapper' id='wrapper'>
        <Sidebar/>
        <main>
          <Post
          outhor="Cássio Leal"
          />
          <Post
          author="Cássio Leal"
          content="Casado, pai de 2 filhas (03 e 01 anos), 33 anos, residente em Plataforma (Ilha Amarela)
          Salvador – BA. Professor e Empreendedor no ramo da Informática, tendo 10 anos de
          experiência em suporte ao usuário de computador, sem férias e com muito vigor. Técnico
          reconhecido como cordial, eficaz e atencioso pelos seus clientes."
          />
        </main>
      </div>
    </div>
  );
}

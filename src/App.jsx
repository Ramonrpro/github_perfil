import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/Reposlist";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 3 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  );
}

export default App;

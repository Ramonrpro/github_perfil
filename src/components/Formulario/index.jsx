import "../Perfil/perfil.css";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("");

  const [relogioVisivel, setRelogioVisivel] = useState(true);

  function relogio() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }, []);

    const horas = time.getHours();
    const minutos = time.getMinutes();
    const segundos = time.getSeconds();

    return (
      <h1>
        {horas} : {minutos} : {segundos}
      </h1>
    );
  }

  const alteraNome = (evento) => {
    // console.log(evento.target.value)
    // setNome(evento.target.value)
    setNome((estadoAnterior) => {
      // console.log(estadoAnterior)

      return evento.target.value;
    });
  };

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media === 0 || media === null || media === undefined) {
      return <p>Aguardando valores</p>;
    } else if (media >= 7) {
      return (
        <p>
          Olá {nome} você foi aprovado! Com uma média de: {media.toFixed(1)}
        </p>
      );
    } else {
      return (
        <p>
          Olá {nome} você não foi aprovado!Com uma média de: {media.toFixed(1)}
        </p>
      );
    }
  };

  useEffect(() => {
    console.log("O estado mudou!");
  }, []);

  return (
    <form className="container">
      <ul>
      {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
      </ul>

      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota materia A"
        onChange={({ target }) => setMateriaA(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota materia B"
        onChange={(evento) => setMateriaB(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota materia C"
        onChange={(evento) => setMateriaC(parseInt(evento.target.value))}
      />
      {renderizaResultado()}
      {relogio()}
    </form>
  );
};

export default Formulario;

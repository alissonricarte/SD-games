import React, { useState } from "react";

const ods = [
  { id: 1, nome: "Erradicação da Pobreza", dica: "Acabar com a pobreza em todas as formas no mundo." },
  { id: 2, nome: "Fome Zero", dica: "Acabar com a fome, alcançar segurança alimentar e promover agricultura sustentável." },
  { id: 3, nome: "Saúde e Bem-Estar", dica: "Assegurar uma vida saudável e promover o bem-estar para todos." },
  { id: 4, nome: "Educação de Qualidade", dica: "Garantir educação inclusiva, equitativa e de qualidade." },
  { id: 5, nome: "Igualdade de Gênero", dica: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas." }
];

function App() {
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [indice, setIndice] = useState(Math.floor(Math.random() * ods.length));

  const handleEscolha = (id) => {
    if (id === ods[indice].id) {
      setPontuacao(pontuacao + 1);
      setMensagem("✅ Acertou! Próxima dica...");
      setIndice(Math.floor(Math.random() * ods.length));
    } else {
      setMensagem("❌ Errou! Tente novamente.");
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "50px" }}>
      <h1>Joguinho ODS 🌍</h1>
      <h3>Dica: {ods[indice].dica}</h3>
      <div>
        {ods.map((o) => (
          <button
            key={o.id}
            onClick={() => handleEscolha(o.id)}
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", margin: "5px" }}
          >
            {o.nome}
          </button>
        ))}
      </div>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{mensagem}</p>
      <p>Pontuação: {pontuacao}</p>
    </div>
  );
}

export default App;

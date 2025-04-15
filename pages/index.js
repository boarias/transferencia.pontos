import { useState } from "react";

export default function Home() {
  const [enviado, setEnviado] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [limiteBonus, setLimiteBonus] = useState(0);
  const [valorPago, setValorPago] = useState(0);

  const pontosBonus = enviado * (bonus / 100);
  const pontosRecebidos = enviado + pontosBonus;
  const maxEnvio = bonus > 0 ? limiteBonus / (bonus / 100) : 0;
  const valorPorMil = pontosRecebidos > 0 ? (valorPago / pontosRecebidos) * 1000 : 0;

  const formatarNumero = (numero) => {
    return numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        Calculadora de Transferência com Bônus
      </h1>

      <div style={{ marginTop: 20 }}>
        <label>Pontos enviados</label>
        <input type="number" value={enviado} onChange={(e) => setEnviado(Number(e.target.value))} />
      </div>
      <div>
        <label>% de bônus</label>
        <input type="number" value={bonus} onChange={(e) => setBonus(Number(e.target.value))} />
      </div>
      <div>
        <label>Limite de bônus permitido</label>
        <input type="number" value={limiteBonus} onChange={(e) => setLimiteBonus(Number(e.target.value))} />
      </div>
      <div>
        <label>Valor total pago (R$)</label>
        <input type="number" value={valorPago} onChange={(e) => setValorPago(Number(e.target.value))} step="0.01" />
      </div>

      <div style={{ marginTop: 30 }}>
        <p><strong>Pontos recebidos na cia aérea:</strong> {formatarNumero(pontosRecebidos)} pontos</p>
        <p><strong>Máximo que pode ser enviado sem exceder o bônus:</strong> {formatarNumero(maxEnvio)} pontos</p>
        <p><strong>Valor por 1.000 pontos recebidos:</strong> R$ {formatarNumero(valorPorMil)}</p>
      </div>
    </div>
  );
}
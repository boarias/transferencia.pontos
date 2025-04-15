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
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f9fafb', minHeight: '100vh', padding: '2rem' }}>
      <div style={{
        maxWidth: 500,
        margin: 'auto',
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>
          Transferência de Pontos
        </h1>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ fontWeight: 600 }}>Pontos enviados</label>
            <input type="number" value={enviado} onChange={(e) => setEnviado(Number(e.target.value))}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>% de bônus</label>
            <input type="number" value={bonus} onChange={(e) => setBonus(Number(e.target.value))}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>Limite de bônus permitido</label>
            <input type="number" value={limiteBonus} onChange={(e) => setLimiteBonus(Number(e.target.value))}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>Valor total pago (R$)</label>
            <input type="number" value={valorPago} onChange={(e) => setValorPago(Number(e.target.value))}
              step="0.01" style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          </div>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <p><strong>Pontos recebidos na cia aérea:</strong> {formatarNumero(pontosRecebidos)} pontos</p>
          <p><strong>Máximo que pode ser enviado sem exceder o bônus:</strong> {formatarNumero(maxEnvio)} pontos</p>
          <p><strong>Valor por 1.000 pontos recebidos:</strong> R$ {formatarNumero(valorPorMil)}</p>
        </div>
      </div>
    </div>
  );
}
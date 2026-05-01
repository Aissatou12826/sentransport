import './StatReseau.css';

function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);
  const ligneMax = lignes.reduce((max, l) => l.arrets > max.arrets ? l : max, lignes[0]);

  return (
    <div className="stat-reseau">
      <div className="stat-item">
        <p className="stat-chiffre">{totalLignes}</p>
        <p className="stat-libelle">lignes</p>
      </div>
      <div className="stat-item">
        <p className="stat-chiffre">{totalArrets}</p>
        <p className="stat-libelle">arrêts au total</p>
      </div>
      <div className="stat-item">
        <p className="stat-chiffre">Ligne {ligneMax.numero}</p>
        <p className="stat-libelle">plus d'arrêts ({ligneMax.arrets})</p>
      </div>
    </div>
  );
}

export default StatReseau;
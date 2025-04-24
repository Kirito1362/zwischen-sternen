import { useState } from 'react';
const messages = {
  sad: [
    "Auch die dunkelste Nacht endet, und die Sonne wird wieder scheinen.",
    "Du bist nicht allein – irgendwo denkt jemand gerade an dich.",
    "Selbst Sterne brauchen Dunkelheit, um zu leuchten."
  ],
  hope: [
    "Jeder Tag ist ein neuer Anfang, so unendlich wie das Universum.",
    "Du trägst Licht in dir – auch wenn du es gerade nicht siehst.",
    "Hoffnung ist wie ein Stern: Man sieht sie am besten, wenn es dunkel ist."
  ],
  lonely: [
    "Zwischen all den Sternen da draußen ist dein Licht einzigartig.",
    "Manchmal fühlt sich das Universum leer an – aber ich bin da.",
    "Verbundenheit kennt keine Entfernung – ich bin bei dir, immer."
  ]
};

function App() {
  const [message, setMessage] = useState('');

  const handleClick = (category) => {
    const msgs = messages[category];
    const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
    setMessage(randomMsg);
  };

  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
      <h1>🌌 Zwischen Sternen und Gedanken</h1>
      {!message ? (
        <div>
          <p>Was fühlst du gerade?</p>
          <button onClick={() => handleClick('sad')}>🌑 Dir geht’s nicht gut</button>
          <button onClick={() => handleClick('hope')}>🌠 Du brauchst Hoffnung</button>
          <button onClick={() => handleClick('lonely')}>🌌 Du fühlst dich allein</button>
        </div>
      ) : (
        <div>
          <p style={{ fontStyle: 'italic', marginTop: '2rem' }}>{message}</p>
          <button onClick={() => setMessage('')} style={{ marginTop: '1rem' }}>🔙 Zurück</button>
        </div>
      )}
    </div>
  );
}

export default App;
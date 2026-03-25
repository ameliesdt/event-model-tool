import express from 'express';
import cors from 'cors';

// Server wird erstellt - Gibt Objekt zurück mit dem man alles konfigurieren kann (Routen, Middelware,...)
const app = express();
const PORT = 3000;

// Erlaubt deinem Frontend (localhost:5173) mit deinem Backend (localhost:3000) zu sprechen. Ohne das blockt der Browser die Verbindung weil die Ports unterschiedlich sind.
app.use(cors());
// Sagt dem Server: wenn jemand Daten schickt, parse sie automatisch als JSON. Ohne das kannst du den Body eines Requests nicht lesen.
app.use(express.json());

// Deine erste Route — wenn jemand GET / aufruft (also die Startseite deines Servers), antwortet er mit einem JSON-Objekt. req = der eingehende Request, res = die Antwort die du zurückschickst.
app.get('/', (req, res) => {
  res.json({ message: 'Server läuft!', Amelie: 'thats a test' });
});
// Startet den Server auf Port 3000 und gibt eine Meldung aus sobald er bereit ist.
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

console.log(app);

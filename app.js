const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('seite1', { ueberschrift: 'Willkommen auf Seite 55555551' });
});

app.get('/seite2', (req, res) => {
  res.render('seite2', { ueberschrift: 'Willkommen auf Seite 7777777772' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

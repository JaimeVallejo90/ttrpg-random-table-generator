document.getElementById("calc").addEventListener("click", () => {
  const raw = document.getElementById("input").value;
  if (!raw.trim()) {
    document.getElementById("output").innerHTML = "<p>No hay datos.</p>";
    return;
  }

  // Partimos por espacios, comas, saltos de línea...
  const tokens = raw.split(/[\s,;]+/).filter(Boolean);
  const values = tokens
    .map(t => parseInt(t, 10))
    .filter(n => !Number.isNaN(n));

  if (values.length === 0) {
    document.getElementById("output").innerHTML = "<p>No encontré números válidos.</p>";
    return;
  }

  const total = values.length;
  const counts = {};

  for (const v of values) {
    counts[v] = (counts[v] || 0) + 1;
  }

  // Ordenamos por valor de dado (1,2,3,4,...)
  const sortedKeys = Object.keys(counts).map(Number).sort((a, b) => a - b);

  let html = `<p>Total de tiradas: ${total}</p>`;
  html += `<table>
    <tr><th>Valor</th><th>Frecuencia</th><th>%</th></tr>`;

  for (const k of sortedKeys) {
    const c = counts[k];
    const perc = ((c / total) * 100).toFixed(2);
    html += `<tr><td>${k}</td><td>${c}</td><td>${perc}%</td></tr>`;
  }
  html += `</table>`;

  document.getElementById("output").innerHTML = html;
});

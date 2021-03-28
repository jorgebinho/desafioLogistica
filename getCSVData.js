async function getCSVData() {
  const response = await fetch('./teste/DNIT-Distancias.csv');
  const data = await response.text();

  const table = [];
  const rows = data.split(/\n/);
  rows.forEach((row) => {
    const rowi = row.split(";");
    table.push(rowi);
  })
  return table;
};

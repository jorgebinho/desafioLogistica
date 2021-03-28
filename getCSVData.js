async function getCSVData() {
  const response = await fetch('./teste/DNIT-Distancias.csv');
  const data = await response.text();

  const table = [];
  const rows = data.split(/\n/).slice(1);
  rows.forEach(row => {
    const rowi = row.split(";");
    table.push(rowi);
  })
  console.log(table);
};

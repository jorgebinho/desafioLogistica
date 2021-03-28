async function gotAsyncData() {
  const data = await getCSVData();
  data[0].map((item, index) => item === "PORTO ALEGRE" ? console.log("ENCONTEREI PORRRUUAAARAARRA está no index  " + index) : null);
}

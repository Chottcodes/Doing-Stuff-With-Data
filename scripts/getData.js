const loadTableData = async () => {
  try {
    const getJson = await fetch("/data/data.json");
    if (!getJson.ok) {
      throw new Error(`HTTP error! Status: ${getJson.status}`);
    }
    const data = await getJson.json();
    return data.People;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export { loadTableData };

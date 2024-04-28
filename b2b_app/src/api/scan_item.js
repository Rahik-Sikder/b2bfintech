const scanItem = async (item_code) => {
    fetch(`http://localhost:4000/scanCode?item_code=${item_code}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  
  
  
  export { scanItem, }
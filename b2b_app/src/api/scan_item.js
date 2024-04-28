const scanItem = async (item_code, setItem) => {
  console.log("Sending out req with code: ", item_code);
  const url = "http://10.0.2.2:4000/scanCode?item_code=" + item_code;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Response was: ", response.json());
      setItem(response.json());
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
};

export { scanItem };

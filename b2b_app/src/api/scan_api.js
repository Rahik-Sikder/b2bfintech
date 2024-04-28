const scanItem = async (item_code, setItem, setLoading) => {
  console.log("Sending out req with code: ", item_code);
  const url =
    "https://us-central1-reclaim-convergent.cloudfunctions.net/app/scanCode?item_code=" +
    item_code;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the data received from the backend
      setItem(JSON.parse(data));
      setLoading(false);
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
};

const sendRequest = async (item_name, refund_amount, item_description, return_reasoning, closeFunction) => {
    closeFunction();
    // fetch("https://us-central1-reclaim-convergent.cloudfunctions.net/app/submitReturn", {
    //   "method": "POST",
    //   "headers": {
    //     "Content-Type": "application/json" // Specify content type as JSON
    //   },
    //   "body": JSON.stringify({
    //     "item_name": item_name,
    //     "date_ordered": "2/24/24",
    //     "refund_amount": refund_amount,
    //     "item_description": item_description,
    //     "return_reasoning": return_reasoning
    //   })
    // }).then((response) => {
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok: ", response.statusText);
    //   } else {
    //     console.log("Sent out request!");
    //     closeFunction()
    //   }
    //   return response.json();
    // }).catch((error) => {
    //   // Handle errors
    //   console.error("There was a problem with the fetch operation:", error);
    // });
}

export { scanItem, sendRequest};

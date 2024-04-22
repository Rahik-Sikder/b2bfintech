

const getPendingData = async (setData) => {
  fetch("http://localhost:4000/pendingData")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the data received from the backend
      // console.log(data.orders);
      setData(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
};

const getDeliveryData = async (setData) => {
  fetch("http://localhost:4000/deliveryData")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the data received from the backend
      console.log(data);
      setData(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
};

const getRecievedData = async (setData) => {
  fetch("http://localhost:4000/recievedData")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the data received from the backend
      // console.log(data);
      setData(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
};

const getCompletedData = async (setData) => {
  fetch("http://localhost:4000/completedData")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the data received from the backend
      // console.log(data);
      setData(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
};



export { getPendingData, getDeliveryData, getRecievedData, getCompletedData }

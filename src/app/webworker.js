self.onmessage = function (event) {
    const data = event.data;
    const result = processArray(data);
    self.postMessage(result);
  };
   
  function processArray(data) {
    // Simulate processing (e.g., adding 10 to each element)
    return data.map((item) => item + 10);
  }
/**
 * 1. for POST  ==> you have to mention the method
 * 2. add an object (fetch option) after url of the fetch
 * 3. inside the object must mention method: 'POST' 
 * 4. mention the headers: which is an object itself
 * 5. in the headers object mention content-type and the value will be appliction/json to inform the server that your are sending json data
 * 6. add body to teh fetch option
 * 7. value of the body will be the data that you want to send to the server
 * 8. make sure that you sue JSON.stringify to convert the data into JSON string
 */
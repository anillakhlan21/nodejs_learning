// Promise based HTTP client for the browser and node.js
/**
Make XMLHttpRequests from the browser
Make http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic transforms for JSON data
🆕 Automatic data object serialization to multipart/form-data and x-www-form-urlencoded 
    body encodings
Client side support for protecting against XSRF
 */

const axios = require("axios");

// axios({
//     method: 'get',
//     url: 'https://jsonplaceholder.typicode.com/posts'
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// axios.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
const data = {
    heading: "{{$randomProductMaterial}}",
    description: "{{$randomLoremParagraph}}",
    author: "{{$randomFullName}}",
    tag: "{{$randomFileName}}",
    created_at:  new Date().toISOString(),
    updated_at: new Date().toISOString()
}   
// axios.post('http://localhost:4000/api/v1/note',data).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

const updatedData = {
    heading: "Alfinity",
    description: "I am going to save environment variable for alfinity backend",
    author: "Anil Kumar",
    tag: "alfinity,backend,",
    created_at:  new Date().toISOString(),
    updated_at: new Date().toISOString()
}  

// axios.put('http://localhost:4000/api/v1/note/6461f145c62da8469158a14d',updatedData).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// axios.delete('http://localhost:4000/api/v1/note/646106b183963ed2f3cf1fb7').then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEyLCJyb2xlaWQiOjEsImlhdCI6MTY4MzIyMDcyNiwiZXhwIjoxNjgzMjU2NzI2fQ.2BwC8aGgHKAC16ITQfLbl7cimuG1DehyeaEpqvh2kbY'}
})

instance.get('/api/v1/notes').then((data)=>{
    console.log(data)
})

//--------------------------Interceptor----------------------------------------

// Register request interceptor
axios.interceptors.request.use(config => {
  console.log('Request interceptor triggered');
  // Modify the request config
  config.headers['Authorization'] = 'Bearer token';
  return config;
}, error => {
  return Promise.reject(error);
});

// Register response interceptor
axios.interceptors.response.use(response => {
  console.log('Response interceptor triggered');
  // Modify the response data
  response.data.message = 'Modified message';
  return response;
}, error => {
  return Promise.reject(error);
});

// Make an HTTP request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Response received:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//   --------------defaults---------------------------------------------------
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token';


//--------------------axios.all--------------------------------------------
const request1 = axios.get('https://api.example.com/user/1');
const request2 = axios.get('https://api.example.com/user/2');

axios.all([request1, request2])
  .then(axios.spread((response1, response2) => {
    console.log(response1.data);
    console.log(response2.data);
  }))
  .catch(error => {
    console.error(error);
  });
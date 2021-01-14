import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import axios from "axios"

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN"
axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.request.use(
  (request) => {
    console.log(request)
    //  Edit request config
    return request
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    console.log(response)
    // Edit response config
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// const myRequestInterceptor = axios.interceptors.request.use(
//   function (request) {
//     console.log(request)
//     //  Edit request config
//     return request
//   },
//   (error) => {
//     console.log(error)
//     axios.interceptors.request.eject(myRequestInterceptor)
//   }
// )

// const myResponseInterceptors = axios.interceptors.response.use(
//   function (response) {
//     console.log(response)
//     //  Edit request config
//     return response
//   },
//   (error) => {
//     console.log(error)
//     axios.interceptors.response.eject(myResponseInterceptors)
//   }
// )

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()

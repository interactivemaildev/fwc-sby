import axios from 'axios'

const Axios = (contentType?: string) => {
  const axiosInstance = axios.create({
    baseURL: process.env.BASE_API_URL,
    headers: { 'Content-Type': contentType || 'application/json' },
  })

  axiosInstance.interceptors.request.use(
    (request) => {
      // console.log('Request =>', request)
      return request
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      // console.log('Response =>', response)
      return response.data
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

export default Axios

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import Authprovider from './Firebase/Authprovider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
 
      <QueryClientProvider client={queryClient}>
        <Authprovider>
          <RouterProvider router={router}>
          </RouterProvider>
        </Authprovider>

      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

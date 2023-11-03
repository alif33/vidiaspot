import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { homeApi } from './redux/api/homeApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={homeApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)

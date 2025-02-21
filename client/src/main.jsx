import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import rootReducer from './reducer/index.js'
import { BrowserRouter } from 'react-router-dom'

export const store = configureStore({
  reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Provider store={store}>
        <Toaster />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

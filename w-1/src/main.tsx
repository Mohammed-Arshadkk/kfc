import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import List from './components/List'
import Kfc from './components/Kfc'
import Spicy from './components/Header/Spicy'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <List />
    <Kfc />
    <Spicy />
  </React.StrictMode>,
)

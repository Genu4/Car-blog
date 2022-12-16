import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './main.scss'
import Header from './Header/Header'
import Mobilemenu from './Header/MobileMenu'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Header />
        <Mobilemenu />
    </React.StrictMode>
)

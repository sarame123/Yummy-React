import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Card/Card'
import Loading from '../Loading/Loading'
import Details from '../Details/Details'
import Sidebar from '../Sidebar/Sidebar'
import style from '../Layout/Layout.module.css'

export default function Layout() {
  return (
    <>
     <Sidebar/>
   <div className={`container py-5  ${style.main}`} >
   <Outlet ></Outlet>
   </div>
    
    </>
  )
}

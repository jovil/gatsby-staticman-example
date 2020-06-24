import React from 'react'
import Header from '../components/header'

import s from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Header />
        {props.children}
      </div>
    </div>
  )
}
export default Layout

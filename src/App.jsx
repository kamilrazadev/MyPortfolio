import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './style.module.css'
import { BsArrowRightShort } from 'react-icons/bs';

import './App.css'

function App() {

  const {common_bg_color, common_color, section_title, section_heading, heading_lg, heading_md, heading_sm, white_btn, colored_btn, btn_arrow} = styles;


  return (
    <>
    <h4 className={`${section_title}`}>
      section title
    </h4>
    <h1 className={`${section_heading}`}>
      section heading
    </h1>
    <h2 className={`${heading_lg}`}>
      Heading Large
    </h2>
    <h2 className={`${heading_md}`}>
      Heading Medium
    </h2>
    <h2 className={`${heading_sm}`}>
      Heading Small
    </h2>
    <p>
      Paragraph
    </p>
    <button className={`${white_btn}`}>
      hire me
      <BsArrowRightShort className={`${btn_arrow}`}/>
    </button>
    {/* <br /> */}
    <button className={`${colored_btn}`}>
      colored button
      <BsArrowRightShort className={`${btn_arrow}`}/>
    </button>
    </>
  )
}

export default App

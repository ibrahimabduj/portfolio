import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";
import { TopNav, Hero, AboutMe, WhatIdo } from '../containers'
import { useState } from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  const [active, setActive] = useState('Home')
  return (
    <>
      <TopNav active={active} />
      <Hero active={active} setActive={setActive} onEnterViewport={() => console.log('Home') && setActive('Home')} />
      <AboutMe  active={active}  setActive={setActive} onEnterViewport={() => console.log('About') && setActive('About')}/>
      <WhatIdo  active={active} setActive={setActive} onEnterViewport={() => console.log('Services') && setActive('Services')} />
    </>

  );
}
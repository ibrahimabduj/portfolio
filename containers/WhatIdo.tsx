import { useEffect, useRef } from "react";
import Section from "./Section";
import VisibilitySensor from 'react-visibility-sensor';
import handleViewport, { useInViewport } from "react-in-viewport";


export default function WhatIdoComp({ setActive }) {

  const myRef = useRef();
  const {inViewport,} = useInViewport(myRef,);
  useEffect(() => {
    console.log(inViewport);
    if (inViewport)
      setActive('Services')
  }, [inViewport, setActive])
  return (
    <div ref={myRef}>
      <Section name="What I Do?" title="How I can help your next project">

      </Section>
    </div>


  )
}
export const WhatIdo = handleViewport(WhatIdoComp, /** options: {}, config: {} **/);

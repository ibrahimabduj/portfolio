import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { url } from "inspector";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VisibilitySensor from 'react-visibility-sensor';


import { useEffect, useRef } from "react";
import handleViewport, { useInViewport } from "react-in-viewport";
export default function HeroComp({ setActive }) {
  const myRef = useRef();
  const {inViewport,} = useInViewport(myRef);
  useEffect(() => {
    if (inViewport)
      setActive('Home')
  }, [inViewport, setActive])
  return (

    <Box ref={myRef} sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('/images/intro.jpg')`

    }}>
      <Grid sx={{
        color: 'white',
        textAlign: 'center'

      }}>
        <Typography variant="h4" fontWeight={400} textTransform='uppercase' >
          Hi, Im a Freelancer
        </Typography>

        <Typography textTransform={"uppercase"} variant="h1" lineHeight={'1.5'} className="typewriter">
          Developer
        </Typography>
        <Typography>based in Addis Ababa, Ethiopia.</Typography>
        <Button variant="contained" color="secondary" sx={{
          width: 'fit-content',
          padding: '0.8rem 2.6rem',
          transition: 'all .5s ease',
          marginTop: ' 1rem!important',
          fontWeight: 600,
        }}>View My Works</Button>
        <div>
          <ArrowDownwardIcon />

        </div>
      </Grid>

    </Box>
  )
}
export  const Hero = handleViewport(HeroComp, /** options: {}, config: {} **/);


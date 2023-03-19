import { Box, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { borderRadius, fontWeight, padding } from "@mui/system";
import InfoBoard from "component/InfoBoard";
import { useEffect, useRef } from "react";
import Section from "./Section";
import handleViewport, { useInViewport } from 'react-in-viewport';

 export function AboutMe({ setActive }) {
  const myRef = useRef();
  const {inViewport,} = useInViewport(myRef);
  useEffect(() => {
    if (inViewport)
      setActive('About')
  }, [inViewport, setActive])
  return (
    <Box ref={myRef} sx={{
      minHeight: '100vh',
    }}>
      <Section name={'About Me'} title={'Know Me More'} >
        <Grid flexDirection={"row"} container gap={2}>
          <Grid item flex={3} >
            <Typography variant="h2"
              fontFamily={'Poppins,sans-serif'}
              fontSize={'2rem'}>
              Hi, I am Ibrahim Abdu
            </Typography>
            <Typography variant="subtitle1" sx={{
              fontSize: '1.3125rem',
            }}>
              I am a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Clients have procured exceptional results while working with me.
              Delivering work within time and budget which meets client’s requirements is my moto.

            </Typography>
          </Grid>
          <Stack flex={1} justifyContent={"center"} alignItems={'center'}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Typography variant="h2" sx={{
                backgroundColor: '#f5df4e',
                fontWeight: 500,
                borderRadius: '50%',
                textAlign: 'center',
                padding: '20px',
                minHeight: '120px',
                minWidth: '120px',
              }}>
              </Typography>
              <Typography marginLeft={'-110px'} variant="h1" fontWeight={'400'} fontSize={'10rem'}>
                4
              </Typography>
            </Grid>

            <Typography fontWeight={'500'}>
              Years of Experiance
            </Typography>

          </Stack>
        </Grid>
        <Grid sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }} container >
          <InfoBoard title={'Name:'} value={'Ibrahim Abdu'} />
          <InfoBoard title={'Email:'} value={'ibrahimabduj@gmail.com'} />
          <InfoBoard title={'Date of birth:'} value={'3 October, 1996'} />
          <InfoBoard title={'From:'} value={'Addis Ababa, Ethiopia'} />
        </Grid>
      </Section>

    </Box>
  )
}

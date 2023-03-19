import { Stack, Typography } from "@mui/material";

export default function InfoBoard({ title, value }) {
  return (
    <Stack
      sx={{
        marginTop: 2,
      }}>
      <Typography sx={{
        color: '#6c757',
      }} variant="subtitle1">{title}</Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: '600',
        }}>{value}</Typography>
    </Stack>
  )
}

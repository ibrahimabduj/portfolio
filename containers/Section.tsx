import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
export interface SectionProps {
    name: string;
    title: string;
    children: any;
    background?: string;
}
export default function Section({ name, title, children, background }: SectionProps) {
    return (
        <Stack sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            maxWidth: '90%',
            marginTop: 10,
            backgroundColor: background?background:''
        }}>
            <Typography sx={{
                backgroundColor: '#f5df4e',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                lineHeight: 1.8,
                marginBottom: 2

            }}>{name}</Typography>

            <Typography variant='h2' sx={{
                fontWeight: '600',
                fontSize: '2.5rem',
                marginBottom: '3rem'
            }}>{title}</Typography>
            {children}
        </Stack >
    )
}

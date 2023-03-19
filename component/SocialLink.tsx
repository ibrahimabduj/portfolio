import Link from 'next/link'
import React from 'react'
import { SocialIcon } from './styled/styled'

export default function SocialLink({ children, color, link }) {
    return (
        <Link href={link} color="inherit" target={'_blank'}>

            <SocialIcon color={color} >
                {children}
            </SocialIcon>
        </Link>
    )
}

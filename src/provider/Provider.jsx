import { GlobalContext } from '@/contexts/GlobalContext'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <GlobalContext>{children}</GlobalContext>
    )
}

export default Provider
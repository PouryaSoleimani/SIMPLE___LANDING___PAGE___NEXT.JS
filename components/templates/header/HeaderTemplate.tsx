import AppBarComponent from '@/components/modules/appbar/AppBarComponent'
import BottomHeaderComponent from '@/components/modules/bottom-header/BottomHeaderComponent'
import React from 'react'

function HeaderTemplate() {
    return (
        <>
            <AppBarComponent />
            <BottomHeaderComponent/>
        </>
    )
}

export default HeaderTemplate
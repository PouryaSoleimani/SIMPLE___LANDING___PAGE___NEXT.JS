import CopyRightComponent from '@/components/modules/footer/CopyRightComponent'
import UpperFooter from '@/components/modules/footer/UpperFooter'
import React from 'react'

const FooterTemplate = () => {
    return (
        <footer className='w-full pt-4 h-64  bg-blue-600 mt-20'>
            <UpperFooter />
            <CopyRightComponent />
        </footer>
    )
}

export default FooterTemplate
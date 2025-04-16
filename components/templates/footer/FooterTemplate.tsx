import CopyRightComponent from '@/components/modules/footer/CopyRightComponent'
import UpperFooter from '@/components/modules/footer/UpperFooter'
import React from 'react'

const FooterTemplate = () => {
    return (
        <footer className='w-full py-10 bg-blue-600 mt-10'>
            <UpperFooter />
            <CopyRightComponent />
        </footer>
    )
}

export default FooterTemplate
import React from 'react'
import ContentLoader from 'react-content-loader'
export const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={320}
        height={50}
        viewBox='0 0 290 50'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'>
            <circle cx="25" cy='25' r='20'/>
            <rect x='64' y='0' rx='6' ry='6' width='130' height='25'/>
            <rect x='64' y='32' rx='6' ry='6' width='165' height='15'/>
            <rect x='250' y='12' rx='24' ry='24' width='26' height='26'/>
    </ContentLoader>
)

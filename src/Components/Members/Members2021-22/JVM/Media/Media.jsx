import React from 'react'
import '../../../Members2023-24/GB/GB.css'
import Card from '../../Card/card'
import data from './Media'
import HCard from '../../../../HeaderCard/HCard'
export default function page() {
    return (

        <>

            <HCard head={"Media & Publicity Heads 2021-22"}></HCard>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}


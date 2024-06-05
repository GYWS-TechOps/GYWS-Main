import React from 'react'
import '../../GB/GB.css'
import Card from '../../Card/card'
import data from './rise'
import HCard from '../../../../HeaderCard/HCard'
export default function page() {
    return (

        <>
         
            <HCard head={"Rise Heads 2024-25"}></HCard>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}

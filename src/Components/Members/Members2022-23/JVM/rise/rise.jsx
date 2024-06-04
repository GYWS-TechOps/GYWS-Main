import React from 'react'
import '../../../Members2023-24/GB/GB.css'
import Card from '../../Card/card'
import data from './rise'
import ceo from './ceo'
import HCard from '../../../../HeaderCard/HCard'
export default function page() {
    return (

        <>

            <HCard head={"RISE 2022-23"}></HCard>
            <div className="members_container">
                {ceo.map((ceo, index) => (
                    <Card key={index} name={ceo.name} position={ceo.position} imageUrl={ceo.imageUrl} facebookLink={data.facebookLink}
                        email={ceo.email} linkedinLink={ceo.linkedinLink} />
                ))}
            </div> <br /><br />

            <HCard head={"RISE Heads"}></HCard>

            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}

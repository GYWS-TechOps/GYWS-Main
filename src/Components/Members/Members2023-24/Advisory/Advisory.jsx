import React from 'react'
import Card from '../Card/card.jsx'
import data from './Advisory'
import '../GB/GB.css'
import HCard from '../../../HeaderCard/HCard.jsx'
function Advisory() {
    return (
        <> <HCard head={"Advisory Committee"}></HCard>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div></>
    )
}

export default Advisory
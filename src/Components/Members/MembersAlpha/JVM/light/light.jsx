import React from 'react'
import '../../GB/GB.css'
import Heads from '../heads/heads.jsx'

export default function Light({year}) {
    return (

        <>
            <br />
            <Heads year={year} team = {'gbs'} position={"Chief Executive Office, LiGHT"} heading ={"Light Ceo"}/>
            <br />
            <br />
            <Heads year={year} team = {'light'}  position ={"LiGHT Head"}heading ={"Light Heads"}/>
            <br />
            
        </>

    )
}

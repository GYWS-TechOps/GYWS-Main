import React, { createContext, useState } from 'react';
import Daksha from "./Rise/Daksha.png"
import Pace from "./Rise/Pace.png"
import JVM from "./Rise/JVM.jpg"
import Excel from "./Rise/Excel.png"
import Zero from "./Rise/Zero.png"

export const MyContext = createContext([
    {
        image: Daksha,
        description: "Daksha is a 3-day online workshop on AI and ML for Grade 8-12 students, bridging the gap between theory and application to equip them with essential career skills.",
        title: "DAKSHA",
        color:"blue",
        direction:'col',
        titlecolor:"titleblue"
    },
    {
        image: Pace,
        description: `The PACE program, aligned with NEP 2020, empowers parents to engage young learners in holistic, nature-themed activities, fostering well-being and parent-child interaction.`,
        title: "PACE",
        color:"green",
        direction:'colreverse',
        titlecolor:"titlegreen"
    },
    {
        image: JVM,
        description: "At Jagriti Vidya Mandir, we host a variety of events, such as Scinovate, PACE, and Zero Period, each designed to enhance student learning and engagement.",
        title: "JVM EVENTS",
        color:"orange",
        direction:'col',
        titlecolor:"titleorange"
    },
    {
        image: Excel,
        description: "The EXCEL event is a two-day online workshop for Grade 6-12 students, exploring various career paths.",
        title: "EXCEL",
        color:"yellow",
        direction:'colreverse',
        titlecolor:"titleyellow"
    },
    {
        image: Zero,
        description: "Zero Period enhances children's physical, cognitive, and emotional skills through daily 30-minute activities in five key areas, fostering overall development.",
        title: "Zero Period",
        color:"blue",
        direction:'col',
        titlecolor:"titleblue"
    }
]);

import React, { createContext, useState } from 'react';
import Daksha from "../assets/Daksha.png"
import Pace from "../assets/Pace.png"
import JVM from "../assets/JVM.jpg"
import Excel from "../assets/Excel.png"
import Zero from "../assets/Zero.png"

export const MyContext = createContext([
    {
        image: Daksha,
        description: "Daksha is a 3-day online workshop on AI and ML for Grade 8-12 students, bridging the gap between theory and application to equip them with essential career skills.",
        title: "DAKSHA",
        border:"border-blue-600",
        bgcolor:"bg-blue-200",
        shadow:"hover:shadow-blue-700"
    },
    {
        image: Pace,
        description: `The PACE program, aligned with NEP 2020, empowers parents to engage young learners in holistic, nature-themed activities, fostering well-being and parent-child interaction.`,
        title: "PACE",
        border:"border-green-600",
        bgcolor:"bg-green-200",
        shadow:"hover:shadow-green-700"
    },
    {
        image: JVM,
        description: "At Jagriti Vidya Mandir, we host a variety of events, such as Scinovate, PACE, and Zero Period, each designed to enhance student learning and engagement.",
        title: "JVM EVENTS",
        border:"border-orange-600",
        bgcolor:"bg-orange-200",
        shadow:"hover:shadow-orange-700"
    },
    {
        image: Excel,
        description: "The EXCEL event is a two-day online workshop for Grade 6-12 students, exploring various career paths.",
        title: "EXCEL",
        border:"border-yellow-600",
        bgcolor:"bg-yellow-200",
        shadow:"hover:shadow-yellow-700"
    },
    {
        image: Zero,
        description: "Zero Period enhances children's physical, cognitive, and emotional skills through daily 30-minute activities in five key areas, fostering overall development.",
        title: "Zero Period",
        border:"border-blue-600",
        bgcolor:"bg-blue-200",
        shadow:"hover:shadow-blue-700"
    }
]);

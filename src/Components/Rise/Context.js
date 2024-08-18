import React, { createContext, useState } from 'react';
import Daksha from "./Rise_assets/Daksha.png"
import Pace from "./Rise_assets/Pace.png"
import JVM from "./Rise_assets/JVM.jpg"
import Excel from "./Rise_assets/Excel.png"
import Zero from "./Rise_assets/Zero.png"
import Daksha_pdf from "./Rise_pdfs/Daksha_24.pdf"
import EXCEL_pdf from "./Rise_pdfs/EXCEL_23.pdf"
import PACE_pdf from "./Rise_pdfs/PaCE_23.pdf"

export const MyContext = createContext([
    {
        image: Daksha,
        description: "Daksha is a 3-day online workshop on AI and ML for Grade 8-12 students, bridging the gap between theory and application to equip them with essential career skills.",
        title: "DAKSHA",
        color:"rise-blue",
        direction:'rise-col',
        titlecolor:"rise-titleblue",
        btncolor:"rise-blue-btn",
        link: Daksha_pdf
        
    },
    {
        image: Pace,
        description: `The PACE program, aligned with NEP 2020, empowers parents to engage young learners in holistic, nature-themed activities, fostering well-being and parent-child interaction.`,
        title: "PACE",
        color:"rise-green",
        direction:'rise-colreverse',
        titlecolor:"rise-titlegreen",
        btncolor:"rise-green-btn",
        link:PACE_pdf
    },
    {
        image: JVM,
        description: "At Jagriti Vidya Mandir, we host a variety of events, such as Scinovate, PACE, and Zero Period, each designed to enhance student learning and engagement.",
        title: "JVM EVENTS",
        color:"rise-orange",
        direction:'rise-col',
        titlecolor:"rise-titleorange",
        btncolor:"rise-orange-btn",
        link:"#"
    },
    {
        image: Excel,
        description: "The EXCEL event is a two-day online workshop for Grade 6-12 students, exploring various career paths.",
        title: "EXCEL",
        color:"rise-yellow",
        direction:'rise-colreverse',
        titlecolor:"rise-titleyellow",
        btncolor:"rise-yellow-btn",
        link:EXCEL_pdf
    },
    {
        image: Zero,
        description: "Zero Period enhances children's physical, cognitive, and emotional skills through daily 30-minute activities in five key areas, fostering overall development.",
        title: "Zero Period",
        color:"rise-purple",
        direction:'rise-col',
        titlecolor:"rise-titlepurple",
        btncolor:"rise-purple-btn",
        link:"#"
    }
]);

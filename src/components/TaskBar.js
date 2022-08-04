import {TaskBar,List } from '@react95/core';
import React from 'react'
import about from '../assets/About.png';
import resume from '../assets/Resume.png';
import proj from '../assets/Proj.png';

function Taskbar({openBio,openResume}) {
    
    return (
        <TaskBar
            list={
                <List>
                    <List.Item>
                        <img src={about} className={'icon'}  onClick={()=>openBio} alt=''/>
                        About
                    </List.Item>
                    <List.Divider />
                    <List.Item>
                    <img src={resume} className={'icon'} alt='' />
                        Resume
                    </List.Item>
                    <List.Divider />
                    <List.Item>
                    <img src={proj} className={'icon'} alt=''/>
                        Projects
                    </List.Item>
                </List>
            }
        />
    )
}

export default Taskbar
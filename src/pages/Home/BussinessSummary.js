import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlineFileDone, AiOutlineProject } from 'react-icons/ai'
import './BussinessSummary.css'
import { Box, styled } from '@mui/material';

const BussinessSummary = () => {
    const ELEMENT_CONTAINER = styled(Box)({
        padding: '1.5em',
        backgroundColor: '#ede9e4'
    })
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <ELEMENT_CONTAINER >
                <h1 ><FaTools /></h1>
                <h1 >7500 <span ><BsFillPlusCircleFill /></span></h1>
                <p >Tools</p>

            </ELEMENT_CONTAINER>
            <div ></div>
            <ELEMENT_CONTAINER >
                <h1 ><AiOutlineFileDone /></h1>
                <h1 >5500 <span ><BsFillPlusCircleFill /></span></h1>
                <p >Project Complete</p>

            </ELEMENT_CONTAINER>
            <div ></div>
            <ELEMENT_CONTAINER >
                <h1 ><AiOutlineProject /></h1>
                <h1 >5800 <span ><BsFillPlusCircleFill /></span></h1>
                <p >Total Projects</p>

            </ELEMENT_CONTAINER>
            <div ></div>
            <ELEMENT_CONTAINER >
                <h1 ><HiUserGroup /></h1>
                <h1 >4900 <span ><BsFillPlusCircleFill /></span></h1>
                <p >Team member</p>
            </ELEMENT_CONTAINER>
        </Box>
    );
};

export default BussinessSummary;
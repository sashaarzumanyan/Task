import React from 'react'
import styled from 'styled-components'
import { Dashboard } from 'styled-icons/boxicons-solid';
import {ClipboardTaskListLtr} from '@styled-icons/fluentui-system-filled'
import {PeopleTeam} from "@styled-icons/fluentui-system-filled"
import { Link } from 'react-router-dom';


const Box = styled.div({
    position: 'fixed',
    background: '#FFE4D6;',
    height: '100vh',
    width: '160px',
    borderRadius: '24px 0px 0px 0px'
  });

const DashboardIcon = styled(Dashboard)`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 56px;
    top: 127px;
    color: #E1AA98;
`;
const Clipboard = styled(ClipboardTaskListLtr)`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 54px;
    top: 247px;
    color: #E1AA98;
`;

const Team = styled(PeopleTeam)`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 56px;
    top: 367px;
    color: #E1AA98;
`;
const SideBar = () => {
  return (
    <Box>
        <Link to='/'>
            <DashboardIcon />
        </Link>
        <Link to='/list' >
            <Clipboard />
        </Link>
        <Link to='/list' >
            <Team />
        </Link>
    </Box>
  )
}

export default SideBar
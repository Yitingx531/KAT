import React from 'react';
import NavContainer from '../components/NavContainer';
import TeamContainer from '../components/TeamContainer';
import ContentContainer from './ContentContainer';

export default function MainContainer() {
    return (
        <>
            <NavContainer />
            <ContentContainer />
            <TeamContainer />
        </>

    )
};
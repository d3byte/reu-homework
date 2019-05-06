import React, { useState } from 'react';

import { StateProvider } from '../../context';
import { reducer } from './reducer';

import './style.scss';

import QuestionLine from './components/QuestionLine';
import Container from '../../components/Container';

function Main ({ questions }) {
    const initialState = {
        questions,
        currentQuestion: (questions || [])[0] || {},
    }
    
    
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Container bordered>
                <QuestionLine />
            </Container>
        </StateProvider>
    );
};
export default Main;
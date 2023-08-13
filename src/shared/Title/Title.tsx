import React from 'react';
import { StyledTitle } from './styled';

export type LevelType = 'h1' | 'h2' | 'h3' | 'h4';
interface PropsType {
    children: React.ReactNode;
    level?: LevelType;
}

function Title({ children, level = 'h1' }: PropsType) {
    return (
        <StyledTitle as={level} level={level}>
            {children}
        </StyledTitle>
    );
}

export default Title;

import React from 'react';
import { StyledText } from './styled';

interface PropsType {
    children: React.ReactNode;
    size?: number;
    type?: 'primary' | 'secondary';
    as?: 'span' | 'p';
    centered?: boolean;
}
function Text({ children, type = 'primary', size = 32, as = 'p', centered = false }: PropsType) {
    return (
        <StyledText type={type} size={size} as={as} centered={centered}>
            {children}
        </StyledText>
    );
}

export default Text;

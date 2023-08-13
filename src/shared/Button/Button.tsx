import React from 'react';
import { StyledButton } from './styled';
import { Link, Path } from 'react-router-dom';

interface PropsType {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    as?: 'button' | 'a' | typeof Link;
    to?: string | Partial<Path>;
}

function Button({
    variant = 'primary',
    children,
    onClick,
    disabled,
    as = 'button',
    to,
}: PropsType) {
    return (
        <StyledButton as={as} to={to} variant={variant} disabled={disabled} onClick={onClick}>
            {children}
        </StyledButton>
    );
}

export default Button;

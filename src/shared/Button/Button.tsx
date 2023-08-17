import React from 'react';
import { StyledButton } from './styled';
import { Link, Path } from 'react-router-dom';

interface PropsType {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    tag?: 'button' | 'a' | typeof Link;
    to?: string | Partial<Path>;
    className?: string;
}

function Button({
    variant = 'primary',
    children,
    onClick,
    disabled,
    tag = 'button',
    to,
    className,
}: PropsType) {
    return (
        <StyledButton
            as={tag}
            to={to}
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            className={className}
        >
            {children}
        </StyledButton>
    );
}

export default Button;

import React from 'react'
import { StyledContentWrapper } from './styled'

interface PropsType {
    children: React.ReactNode;
    className?: string;
}

function ContentWrapper({children, className}: PropsType) {
  return (
    <StyledContentWrapper  className={className}>{children}</StyledContentWrapper>
  )
}

export default ContentWrapper
import styled from '@emotion/styled'
import React, { FC, MouseEventHandler, ReactNode } from 'react'

const StyledButton = styled.div({
  margin: '28px auto 64px',
  padding: '14px 4px',
  width: 'fit-content',
  minWidth: 296,
  background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
  fontSize: 18,
  lineHeight: '26px',
  textAlign: 'center',
  color: '#fff',
  cursor: 'pointer',
})

interface PropsType {
  onClick: MouseEventHandler<HTMLDivElement>
  children: ReactNode
}

const Button: FC<PropsType> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default React.memo(Button)

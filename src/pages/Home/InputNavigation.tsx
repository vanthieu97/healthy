import styled from '@emotion/styled'
import cup from 'assets/icons/icon_cup.svg'
import knife from 'assets/icons/icon_knife.svg'
import React, { FC } from 'react'

const Wrapper = styled.div({
  padding: 24,
})
const InputList = styled.ul({
  display: 'flex',
  columnGap: 84,
  justifyContent: 'center',
  padding: '28px 0',
})
const InputItem = styled.li({
  backgroundColor: '#FFCC21',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 116,
  fontFamily: 'Inter',
  fontSize: 20,
  lineHeight: '24px',
  fontWeight: 400,
  textTransform: 'capitalize',
  cursor: 'pointer',
  position: 'relative',
  '&:before,&:after': {
    content: "''",
    position: 'absolute',
    left: 0,
    width: 0,
    height: 0,
    borderLeft: '58px solid transparent',
    borderRight: '58px solid transparent',
  },
  '&:before': {
    borderBottom: '28px solid #FFCC21',
    top: -28,
  },
  '&:after': {
    borderTop: '28px solid #FFCC21',
    bottom: -28,
  },
})
const Icon = styled.img({
  width: 56,
  height: 56,
})

const InputNavigation: FC = () => {
  return (
    <Wrapper>
      <InputList>
        <InputItem>
          <Icon src={knife} alt='icon-knife' />
          morning
        </InputItem>
        <InputItem>
          <Icon src={knife} alt='icon-knife' />
          lunch
        </InputItem>
        <InputItem>
          <Icon src={knife} alt='icon-knife' />
          dinner
        </InputItem>
        <InputItem>
          <Icon src={cup} alt='icon-cup' />
          snack
        </InputItem>
      </InputList>
    </Wrapper>
  )
}

export default React.memo(InputNavigation)

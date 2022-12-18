import React, { FC } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div({
  marginTop: 56,
})
const List = styled.ul({
  display: 'flex',
  columnGap: 32,
})
const Item = styled.li({
  flex: 1,
  backgroundColor: '#2E2E2E',
  padding: '24px 8px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '18px',
})
const Title = styled.span({
  textTransform: 'uppercase',
  font: '400 22px/27px "Inter"',
  color: '#FFCC21',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: -9,
    transform: 'translate(-50%, 50%)',
    width: 56,
    borderTop: 'solid 1px #fff',
  },
})
const Description = styled.span({
  fontSize: 18,
  lineHeight: '26px',
  color: '#fff',
})

const Recommend: FC = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Title>recommended column</Title>
          <Description>オススメ</Description>
        </Item>
        <Item>
          <Title>recommended diet</Title>
          <Description>ダイエット</Description>
        </Item>
        <Item>
          <Title>recommended beauty</Title>
          <Description>美容</Description>
        </Item>
        <Item>
          <Title>recommended health</Title>
          <Description>健康</Description>
        </Item>
      </List>
    </Wrapper>
  )
}

export default React.memo(Recommend)

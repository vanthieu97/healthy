import styled from '@emotion/styled'
import React, { useCallback } from 'react'

interface ItemContentProps {
  index: number
}

const ButtonListing = styled.div({
  padding: '56px 0',
  display: 'flex',
  columnGap: 48,
})
const ButtonItem = styled.a({
  flex: 1,
  backgroundColor: '#FFCC21',
  padding: 24,
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background 0.3s',
  '&:hover': {
    backgroundColor: '#FF963C',
  },
})
const ItemContent = styled.div<ItemContentProps>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 10,
  aspectRatio: '1/1',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    mixBlendMode: 'luminosity',
  },
  '&:after': {
    content: '""',
    background: `url(./images/MyRecommend-${props.index}.jpg) ${
      props.index === 3 ? 'center' : 'left'
    } center no-repeat`,
    position: 'absolute',
    width: '100%',
    height: '100%',
    mixBlendMode: 'luminosity',
    opacity: 0.6,
    backgroundSize: 'cover',
  },
}))
const Title = styled.span({
  textTransform: 'uppercase',
  color: '#FFCC21',
  font: '400 25px/30px "Inter"',
  zIndex: 3,
})
const Description = styled.span({
  backgroundColor: '#FF963C',
  color: '#fff',
  fontSize: 14,
  lineHeight: '20px',
  zIndex: 3,
  padding: '0 16px',
})

const ButtonNavigation = () => {
  const onClickScroll = useCallback(
    (id: string) => () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
    [],
  )

  return (
    <ButtonListing>
      <ButtonItem onClick={onClickScroll('myRecord')}>
        <ItemContent index={1}>
          <Title>body record</Title>
          <Description>自分のカラダの記録</Description>
        </ItemContent>
      </ButtonItem>
      <ButtonItem onClick={onClickScroll('myExercise')}>
        <ItemContent index={2}>
          <Title>my exercise</Title>
          <Description>自分の運動の記録</Description>
        </ItemContent>
      </ButtonItem>
      <ButtonItem onClick={onClickScroll('myDiary')}>
        <ItemContent index={3}>
          <Title>my diary</Title>
          <Description>自分の日記</Description>
        </ItemContent>
      </ButtonItem>
    </ButtonListing>
  )
}

export default React.memo(ButtonNavigation)

import styled from '@emotion/styled'
import Button from 'components/Button'
import React, { useCallback, useState } from 'react'

const Wrapper = styled.div({
  maxWidth: 960,
  margin: 'auto',
  marginBottom: 64,
})
const ItemList = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 8,
  rowGap: 8,
})
const Item = styled.li({
  width: 'calc(25% - 6px)',
  aspectRatio: '1/1',
  position: 'relative',
  fontSize: 0,
  lineHeight: 0,
})
const Image = styled.img({
  objectFit: 'cover',
})
const Title = styled.span({
  position: 'absolute',
  left: 0,
  bottom: 0,
  backgroundColor: '#FFCC21',
  padding: '7px 22px',
  color: '#fff',
  font: '400 15px/18px "Inter"',
})
const data = [
  {
    title: '05.20.Morning',
    url: 'm01.jpg',
  },
  {
    title: '05.20.Lunch',
    url: 'l01.jpg',
  },
  {
    title: '05.21.Dinner',
    url: 'd01.jpg',
  },
  {
    title: '05.20.Morning',
    url: 'm02.jpg',
  },
  {
    title: '05.21.Lunch',
    url: 'l02.jpg',
  },
  {
    title: '05.21.Dinner',
    url: 'd02.jpg',
  },
  {
    title: '05.22.Morning',
    url: 'm03.jpg',
  },
  {
    title: '05.22.Lunch',
    url: 'l03.jpg',
  },
  {
    title: '05.22.Dinner',
    url: 's01.jpg',
  },
  {
    title: '05.20.Morning',
    url: 'm01.jpg',
  },
  {
    title: '05.20.Lunch',
    url: 'l01.jpg',
  },
  {
    title: '05.21.Dinner',
    url: 'd01.jpg',
  },
  {
    title: '05.20.Morning',
    url: 'm02.jpg',
  },
  {
    title: '05.21.Lunch',
    url: 'l02.jpg',
  },
  {
    title: '05.21.Dinner',
    url: 'd02.jpg',
  },
  {
    title: '05.22.Morning',
    url: 'm03.jpg',
  },
]

const MealHistory = () => {
  const [isShowMore, setIsShowMore] = useState(false)

  const onClickLoadMore = useCallback(() => {
    setIsShowMore(true)
  }, [])

  return (
    <Wrapper>
      <ItemList>
        {[...(isShowMore ? data : data.slice(0, 8))].map(({ title, url }) => (
          <Item key={url}>
            <Image src={`/images/${url}`} alt={title} />
            <Title>{title}</Title>
          </Item>
        ))}
      </ItemList>
      {!isShowMore && (
        <Button onClick={onClickLoadMore}>記録をもっと見る</Button>
      )}
    </Wrapper>
  )
}

export default React.memo(MealHistory)

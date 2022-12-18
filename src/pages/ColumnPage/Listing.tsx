import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Button from 'components/Button'

const Wrapper = styled.div({
  marginTop: 56,
  marginBottom: 64,
})
const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 8,
  rowGap: 18,
  marginBottom: 24,
})
const Item = styled.li({
  flex: 'calc(25% - 6px)',
})
const Image = styled.div({
  position: 'relative',
  lineHeight: 0,
  img: {
    aspectRatio: '1.625/1',
  },
})
const DateTime = styled.span({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: '3px 6px',
  boxSizing: 'border-box',
  backgroundColor: '#FFCC21',
  color: '#fff',
  font: '400 15px/30px "Inter"',
})
const Title = styled.div({
  marginTop: 8,
  fontSize: 15,
  lineHeight: '22px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
})
const Tag = styled.div({
  color: '#FF963C',
  fontSize: 12,
  lineHeight: '22px',
})

const data = new Array(16).fill(null).map((_, idx) => ({
  title:
    '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
  tags: ['#魚料理', '#和食', '#DHA'],
  datetime: '2021.05.17 23:25',
  url: `column-${(idx % 8) + 1}.jpg`,
}))

const PAGE_SIZE = 8

const Listing: FC = () => {
  const [count, setCount] = useState(PAGE_SIZE)
  const [showLoadMore, setShowLoadMore] = useState(false)

  useEffect(
    () => {
      if (data.length > PAGE_SIZE) {
        setShowLoadMore(true)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  )

  const onClickLoadMore = useCallback(
    () => {
      const updatedCount = count + PAGE_SIZE
      if (updatedCount >= data.length) {
        setShowLoadMore(false)
      }
      setCount(Math.min(data.length, updatedCount))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, count],
  )

  return (
    <Wrapper>
      <List>
        {data.slice(0, count).map((item, idx) => (
          <Item key={idx}>
            <Image>
              <img src={`/images/${item.url}`} alt={`img-column-${idx + 1}`} />
              <DateTime>{item.datetime}</DateTime>
            </Image>
            <Title>{item.title}</Title>
            <Tag>{item.tags.join(' ')}</Tag>
          </Item>
        ))}
      </List>
      {showLoadMore && (
        <Button onClick={onClickLoadMore}>コラムをもっと見る</Button>
      )}
    </Wrapper>
  )
}

export default React.memo(Listing)

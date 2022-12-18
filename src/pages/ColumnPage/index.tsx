import { FC } from 'react'
import styled from '@emotion/styled'
import Recommend from './Recommend'
import Listing from './Listing'

const Wrapper = styled.div({
  width: '100%',
  maxWidth: 960,
  padding: '0 16px',
  margin: 'auto',
})

const ColumnPage: FC = () => {
  return (
    <Wrapper>
      <Recommend />
      <Listing />
    </Wrapper>
  )
}

export default ColumnPage

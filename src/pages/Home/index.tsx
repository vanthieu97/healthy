import styled from '@emotion/styled'
import React from 'react'
import Achievement from './Achievement'
import InputNavigation from './InputNavigation'
import MealHistory from './MealHistory'

const Wrapper = styled.div({
  width: '100%',
  maxWidth: 1280,
  margin: 'auto',
})

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Achievement />
      <InputNavigation />
      <MealHistory />
    </Wrapper>
  )
}

export default Home

import styled from '@emotion/styled'
import { FC } from 'react'
import BodyRecord from './BodyRecord'
import ButtonNavigation from './ButtonNavigation'
import MyDiary from './MyDiary'
import MyExercise from './MyExercise'

const Wrapper = styled.div({
  width: '100%',
  maxWidth: 960,
  padding: '0 16px',
  margin: 'auto',
})

const MyRecord: FC = () => {
  return (
    <Wrapper>
      <ButtonNavigation />
      <BodyRecord />
      <MyExercise />
      <MyDiary />
    </Wrapper>
  )
}

export default MyRecord

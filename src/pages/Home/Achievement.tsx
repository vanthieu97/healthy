import styled from '@emotion/styled'
import React, { FC, Ref, useEffect, useRef, useState } from 'react'
import background from 'assets/images/d01.jpg'
import PercentageGraph from './PercentageGraph'

const Wrapper = styled.div({
  display: 'flex',
  height: 316,
})
const Rate = styled.div({
  width: 540,
  position: 'relative',
})
const Background = styled.img({
  objectFit: 'cover',
})
const Circle = styled.div({
  position: 'absolute',
  width: 180,
  height: 180,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
})
const Desc = styled.div({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  fontFamily: 'Inter',
})
const Percent = styled.span({
  fontSize: 25,
  marginLeft: 4,
})

const Achievement: FC = () => {
  const canvasRef: Ref<HTMLCanvasElement> = useRef(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    setPercent(75)
  }, [])

  useEffect(
    () => {
      drawCircle()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [percent],
  )

  const drawCircle = () => {
    if (!canvasRef.current) {
      return
    }
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) {
      return
    }
    const radius = 90
    const lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(
      radius,
      radius,
      radius - lineWidth,
      -Math.PI / 2,
      (percent / 100) * 2 * Math.PI - Math.PI / 2,
      false,
    )
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = lineWidth
    ctx.stroke()
  }

  return (
    <Wrapper>
      <Rate>
        <Background src={background} alt='achievement-bg' />
        <Circle>
          <canvas ref={canvasRef} width={180} height={180} />
        </Circle>
        <Desc>
          <span>05/21</span>
          <Percent>{percent}%</Percent>
        </Desc>
      </Rate>
      <PercentageGraph />
    </Wrapper>
  )
}

export default React.memo(Achievement)

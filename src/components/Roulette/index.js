import React, { useState, useRef } from 'react'
import styled, { keyframes, css } from 'styled-components'

const rotate = x => keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(${x}deg);
  }
`

const light = keyframes`
  from {
    background: #eee;
  }

  to {
    background: gold;
  }
`

const Rotate = styled.div`
  background: steelblue;
  width: 288px;
  height: 288px;
  position: relative;
  margin-top: 30px;
  border: 10px solid navy;
  border-radius: 50%;
  box-shadow: 0 0 20px navy;
`

const Light = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  & div {
    position: absolute;
    width: 10px;
    height: 100%;
    left: 129px;
    &:before,
    :after {
      content: '';
      position: absolute;
      top: -9px;
      left: 2px;
      margin: 0 auto;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    &:nth-of-type(even):before {
      background: #eee;
      animation: ${light} 2s ease-in infinite;
    }
    &:nth-of-type(odd):before {
      background: gold;
      animation: ${light} 2s ease-in reverse infinite;
    }
  }
`

const Options = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${({ start, deg }) => {
    if (start) {
      return css`
        ${rotate(deg)} 3s ease-out
      `
    } else {
      return undefined
    }
  }};
  & div {
    position: absolute;
    width: 100%;
    height: 50%;
    right: 50%;
    transform-origin: 100% 100%;
    &:nth-child(even) {
      background: green;
    }
    &:nth-child(odd) {
      background: steelblue;
    }
  }
  & span {
    position: absolute;
    top: 40%;
    right: 50%;
    transform-origin: 100% 100%;
    padding: 0 16px;
    width: 144px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const Needle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  &:before {
    content: '';
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    background: #fff;
    position: absolute;
    top: -8px;
    left: 2.4px;
  }
`

export default ({options}) => {
  const [start, setStart] = useState(0) 
  const deg = useRef(0)
  const degForUpdate = useRef(0)

  const getRandomDeg = n => Math.random() * 360 * n

  return (
    <Rotate
      onClick={() => {
        deg.current = getRandomDeg(options.length)
        degForUpdate.current = 0
        setStart(1)
      }}
      onAnimationEnd={() => {
        degForUpdate.current = deg.current
        if (start > 0) setStart(0)
      }}
    >
      <Light>
        {Array(18)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              style={{ transform: `rotate(${(360 / 18) * i}deg` }}
            ></div>
          ))}
      </Light>
      <Options start={start} deg={deg.current}>
        {options.map((_, i) => (
          <>
            <div
              key={i}
              style={{
                transform: `rotate(${
                  (360 / options.length) * i + (degForUpdate.current % 360)
                }deg) skew(${90 - 360 / options.length}deg)`
              }}
            ></div>
          </>
        ))}
      </Options>
      <Options start={start} deg={deg.current}>
        {options.map((option, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(${
                (360 / options.length) * i + (degForUpdate.current % 360)
              }deg)`
            }}
          >
            {option}
          </span>
        ))}
      </Options>
      <Needle />
    </Rotate>
  )
}
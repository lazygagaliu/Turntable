import React from 'react'
import styled from 'styled-components'

const Chip = styled.div`
  width: fit-content;
  min-width: 120px;
  height: 40px;
  margin: 16px;
  padding: 8px;
  border-radius: 16px;
  background: ${({color}) => color};
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`

export default ({option, handleClick, color = 'pink'}) => {
  return (
    <Chip onClick={handleClick} color={color}>
      {option}
    </Chip>
  )
}
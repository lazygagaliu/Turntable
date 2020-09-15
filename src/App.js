import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useTheme, GlobalStyles, lightTheme, darkTheme } from './styles'
import Roulette from './components/Roulette'
import Chip from './components/Chip'
import Modal from './components/Modal'

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 100%;
  margin: 32px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`

const App = () => {
  const [theme, themeToggler] = useTheme()
  const [options, setOptions] = useState(['mala', 'goodeatmuch', 'fashionmeat', 'sevenwheels', 'stonetwo'])
  const [openModal, setOpenModal] = useState(false)

  const handleAdd = value => {
    setOptions(prev => prev.concat(value))
  }

  const handleDelete = option => {
    setOptions(prev => prev.filter(item => option !== item))
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <ThemeProvider theme={theme === 0 ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <Roulette options={options.length === 2 ? options.concat(options) : options.length % 2 !== 0 ? options.concat(['Try Again']) : options} />
        </Wrapper>
        <Wrapper>
          {options.map((option, i) => (
            <Chip key={i} option={option} handleClick={() => { handleDelete(option) }} />
          ))}
          <Chip
            color='lightblue'
            option='+++'
            handleClick={() => {
              setOpenModal(true)
            }}
          />
        </Wrapper>
      </Container>
      {openModal && (
        <Modal handleCloseModal={handleCloseModal} handleAdd={handleAdd} />
      )}
    </ThemeProvider>
  )
}

export default App

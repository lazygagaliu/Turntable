import React, {useState} from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(100, 100, 100, 0.7);
`

const Dialog = styled.div`
  width: 200px;
  height: 180px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 8px #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & div {
    font-size: 12px;
    font-weight: bold;
  }
  & button {
    color: #fff;
    background: lightblue;
  }
`

export default ({ handleCloseModal, handleAdd }) => {
  const [option, setOption] = useState('')
  return (
    <Modal>
      <Bg onClick={handleCloseModal}></Bg>
      <Dialog>
        <div>Please add an option</div>
        <input type='text' maxLength={20} value={option} onChange={e => { setOption(e.target.value) }} />
        <button onClick={() => {
          handleAdd(option)
          setOption('')
        }}>Add</button>
        <button onClick={() => {
          handleAdd(option)
          setOption('')
          handleCloseModal()
        }}>Add and Close</button>
      </Dialog>
    </Modal>
  )
}
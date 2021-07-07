import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/Stock.store'
import { RootState } from './store'
import styled from 'styled-components'

export function App() {
  const dispatch = useDispatch()
  const stock = useSelector((state: RootState) => state.stock)

  return (
    <Container>
      <h3>Count: {stock.counter}</h3>
      <div>
        <Button
          className='btn btn-danger'
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <button
          className='btn btn-success'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </Container>
  )
}

const Container = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
height: 90vh;
`

const Button = styled.button`
margin-right: 5px;
`

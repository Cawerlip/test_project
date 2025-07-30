import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())

  }
  return (
    <div>
      <h1 data-testid="counterValue">{counterValue}</h1>
      <Button onClick={increment} variant='outline' data-testid="incrementButton">
        +
      </Button>
      <Button onClick={decrement} variant='outline' data-testid="decrementButton">
        -
      </Button>
    </div>
  )
}
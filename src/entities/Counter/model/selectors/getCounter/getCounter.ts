import { StateSchema } from 'app/providers/StoreProvider'
import { useSelector } from 'react-redux'

export const getCounter = (state: StateSchema) => state.counter
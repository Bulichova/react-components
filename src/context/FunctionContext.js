import { createContext } from 'react'
import { getTotalValue } from '../utils/getTotalValue'
const FunctionContext = createContext()
export default FunctionContext
export const functionContext = { getTotalValue }

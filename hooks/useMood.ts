import { useContext } from 'react'
import { MoodContext } from '../context/MoodProvider'

function useMood() {
  return useContext(MoodContext)
}

export default useMood

import {useOutlet} from 'react-router-dom'
import { useState } from 'react'

export default function AnimateOutlet() {
    const out = useOutlet()
    const [outlet] = useState(out)

  return (
    <>{outlet}</>
  )
}

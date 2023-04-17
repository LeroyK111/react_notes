import React, { useContext } from 'react'

export default function Child3(props) {
  const {state} = useContext(props.GlobalContext)
  return (
    <div style={{background: "pink"}}>
      <p>{state.b}</p>
    </div>
  )
}

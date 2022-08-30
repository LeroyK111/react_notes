import React, { useContext } from 'react'

export default function Child2(props) {
  const {state} = useContext(props.GlobalContext)
  return (
    <div style={{background: "skyblue"}}>
      <p>{state.a}</p>
    </div>
  )
}

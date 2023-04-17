import React, { useContext } from 'react'

export default function Child(props) {
  const {dispatch} = useContext(props.GlobalContext)
  
  return (
    <div style={{background: "red"}}>
      <button onClick={()=>{
        dispatch({
          type: "change-a",
          value:"你好"
        })
      }}>改变a</button>
      <button onClick={()=>{
        dispatch({
          type: "change-b",
          value:"世界"
        })
      }}>改变b</button>
    </div>
  )
}

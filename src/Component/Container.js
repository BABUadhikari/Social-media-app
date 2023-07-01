import React from 'react'

function Container(props) {
  return (
    <>
      <div class={"container py-md-5 " + (props.wide ? "" : 'container--narrow')} >
        {props.children}
      </div>
    </>
  )
}

export default Container

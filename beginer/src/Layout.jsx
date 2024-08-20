import React from 'react'
import ProtoType from 'prop-types'

// class LayOut extends React.Component {
//   render() {
//     return <div className='layout'>{this.props.children}</div>
//   }
// }

function LayOut(children) {
  return <div className='layout'>{children}</div>
}

LayOut.protoType = {
  children: ProtoType.oneOfType([ProtoType.element, ProtoType.arrayOf(ProtoType.element)])
}
export default LayOut

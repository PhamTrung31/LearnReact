import React from 'react'

// class BareInput extends React.Component {
//   render() {
//     return <input {...this.props} autoFocus={false} />
//   }
// }

function BareInput(props) {
  return <input {...props} autoFocus={false} />
}

export default BareInput

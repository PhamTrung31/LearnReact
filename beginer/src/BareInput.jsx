import React from 'react'

class BareInput extends React.Component {
  render() {
    const type = 100
    const { type: typeInput, ...rest } = this.props //avoid error
    return <input {...rest} type={typeInput} />
  }
}

// function BareInput({ type, ...rest }) {
//   return <input {...rest} />
// }

export default BareInput

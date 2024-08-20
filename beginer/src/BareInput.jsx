import React from 'react'
import PropTypes from 'prop-types'

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

BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  value: PropTypes.string
}

export default BareInput

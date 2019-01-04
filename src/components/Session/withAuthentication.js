import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as Actions from '../../actions/action'
import AuthUserContext from './AuthUserContext'
import { withFirebase } from '../Firebase/FirebaseContext'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    _initFirebase = false

    constructor(props) {
      super(props)

      this.state = {
        authUser: null,
      }
      this.props.onSetAuthUser(JSON.parse(localStorage.getItem('authUser')))
    }

    firebaseInit = () => {
      if (this.props.firebase && !this._initFirebase) {
        this._initFirebase = true

        this.listener = this.props.firebase.onAuthUserListener(
          authUser => {
            localStorage.setItem('authUser', JSON.stringify(authUser))
            this.setState({ authUser })
            this.props.onSetAuthUser(authUser)
          },
          () => {
            localStorage.removeItem('authUser')
            this.setState({ authUser: null })
            this.props.onSetAuthUser(null)
          }
        )
      }
    }

    componentDidMount() {
      this.setState({
        authUser: JSON.parse(localStorage.getItem('authUser')),
      })
      this.firebaseInit()
    }

    componentDidUpdate() {
      this.firebaseInit()
    }

    componentWillUnmount() {
      this.listener && this.listener()
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }
  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch(Actions.setAuthUser(authUser)),
  })

  return compose(
    withFirebase,
    connect(
      null,
      mapDispatchToProps
    )
  )(WithAuthentication)
}

export default withAuthentication

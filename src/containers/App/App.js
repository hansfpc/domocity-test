import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Icon, Input, Button, Switch, message } from 'antd'
import styled from 'styled-components'
import { getAuthenticated } from '../../actions/auth'
import { getDeviceStatus, turnLightsOn, turnLightsOff } from '../../actions/devices'
import { getToken } from '../../utils'
import { TopBar } from '../../components'
import './App.css'

const ButtonGroup = Button.Group
const Title = styled.h1`
  font-size: 40px;
`
message.config({ top: 70, duration: 2 })

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { usernameField: '', passwordField: '' }
  }

  componentDidMount() {
    this.props.getDeviceStatus()
  }

  handleLogout = () => {
    localStorage.clear()
    this.props.getDeviceStatus()
  }

  handleLogin = () => {
    const { usernameField, passwordField } = this.state
    const user = { email: usernameField, password: passwordField }
    this.props.getAuthenticated(user)
  }

  toggleSwitch = () => {
    const { devices, turnLightsOn, turnLightsOff } = this.props
    if (devices.status) {
      turnLightsOff()
      message.success('Turning lights off...')
    } else {
      message.success('Turning lights on...')
      turnLightsOn()
    }
  }

  renderLoginForm = () => {
    const formStyle = { width: 300, marginBottom: 10 }
    return (
      <Fragment>
        <Title>
          <Icon type="bulb" theme="outlined" /> Please sign in to continue
        </Title>
        <Input
          style={formStyle}
          placeholder={'Username'}
          onChange={e => this.setState({ usernameField: e.target.value })}
        />
        <Input
          style={formStyle}
          placeholder={'Password'}
          type="password"
          onChange={e => this.setState({ passwordField: e.target.value })}
        />
        <Button style={formStyle} type={'primary'} onClick={this.handleLogin}>
          SIGN IN <Icon type="login" theme="outlined" />
        </Button>
        <div>Username: gerkico@gmail.com</div>
        <div>Password: 654321</div>
      </Fragment>
    )
  }

  renderMainContent = () => {
    const {
      devices: { status, loading },
      getDeviceStatus,
    } = this.props
    return (
      <Fragment>
        <Title>
          <Icon type="bulb" theme="outlined" />{' '}
          {loading
            ? 'Loading relee status...'
            : `Lights are currently ${status ? 'On' : 'Off'}`}
        </Title>
        <Switch
          checkedChildren={<Icon type="check" />}
          unCheckedChildren={<Icon type="close" />}
          defaultChecked={status}
          onChange={this.toggleSwitch}
          checked={status}
          style={{ marginBottom: 30 }}
        />
        <ButtonGroup style={{ marginBottom: 20 }}>
          <Button loading={loading} onClick={() => getDeviceStatus()}>
            <Icon type="reload" theme="outlined" /> Refresh
          </Button>
          <Button onClick={this.handleLogout}>
            <Icon type="logout" theme="outlined" /> Sign out
          </Button>
        </ButtonGroup>
        Source code available at
        <Icon
          type="github"
          theme="outlined"
          style={{ fontSize: 40 }}
          onClick={() => (window.location.href = 'https://github.com/hansfpc/domocity-test')}
        />
      </Fragment>
    )
  }

  render() {
    const {
      devices: { status },
    } = this.props
    return (
      <div className="Main-frame">
        <TopBar />
        <div
          className="Main-container"
          style={status ? { backgroundColor: 'yellow' } : { backgroundColor: '#fbfbfb' }}
        >
          <div className="Relee-area">
            {!!getToken() ? this.renderMainContent() : this.renderLoginForm()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth, devices }) => ({ auth, devices })

export default connect(
  mapStateToProps,
  { getAuthenticated, getDeviceStatus, turnLightsOn, turnLightsOff }
)(App)

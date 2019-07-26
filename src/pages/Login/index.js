import React, { Component } from "react";
import api from "../../services/api";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/actions/login";
import { Container, Input, Button, ButtonText, Error } from "./styles";

class Login extends Component {
  state = { username: "" };
  handleSubmit = async () => {
    const { username } = this.state;
    const { loginSuccess, loginFailure, navigation } = this.props;
    try {
      await api.get(`/users/${username}`);
      loginSuccess(username);
      navigation.navigate("Repositories");
    } catch (err) {
      loginFailure();
    }
  };
  render() {
    //isso é muito importante começar a utilizar
    const { username } = this.state;
    const { error } = this.props;
    return (
      <Container>
        {error && <Error>Usuario não existente</Error>}
        <Input
          value={username}
          onChangeText={text => this.setState({ username: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={'digite seu usuario'}
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  error: state.login.error,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

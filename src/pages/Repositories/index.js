import React, { Component } from "react";

import { ActivityIndicator, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as RepositoriesActions from "../../store/actions/repositories";
import { Container } from "./styles";
import Login from "~/pages/Login";

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;
    loadRepositoriesRequest();
  }
  render() {
    const { repositories } = this.props;
    console.tron.log(repositories.data);
    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          repositories.data.map(repository => (
            <Text key={"repository.id"}>{repository.name}</Text>
          ))
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  repositories: state.repositories,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);

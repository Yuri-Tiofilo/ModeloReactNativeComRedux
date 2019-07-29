import { all, takeEvery,takeLatest,call,put, select } from 'redux-saga/effects';
import api from '../../services/api';
import {navigate} from '../../services/navigation';
//asterisco é como se fosse o async
import * as LoginActions from '../actions/login'
import * as RepositoriesActions from '../actions/repositories'
function* login(action){
  try {
    const {username} = action.payload
    //essa linha vai ser transformada em saga na outra
    //await api.get(`/users/${username}`);
    yield call(api.get,`/users/${username}`)

    //loginSuccess(username);
    yield put(LoginActions.loginSuccess(username))

    navigate("Repositories");
  } catch (err) {
    yield put(LoginActions.loginFailure())
  }
}
function* loadRepositories(){
  try{
    const {username} = yield select(state=>state.login)
    const response = yield call(api.get,`/users/${username}/repos`)
    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data))

  }catch(err){
    yield put(RepositoriesActions.loadRepositoriesFailure())
  }
}
//yield é um await
export default function* rootSaga(){
  return yield all([
    takeLatest('LOGIN_REQUEST',login),
    takeLatest('LOAD_REPOSITORIES_REQUEST',loadRepositories)
  ])
}

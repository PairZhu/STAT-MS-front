import React/*, { useEffect }*/ from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
//import { useDispatch } from 'react-redux'

import './App.css';

import { ToastProvider } from 'react-toast-notifications'
import Home from './pages/home'
import Login from './pages/login'

const App = () => {
  /*
  const dispatch = useDispatch()

  useEffect(() => {
    // 请求用户信息
    dispatch(allActions.app.fetchUserInfo(dispatch))
    dispatch(allActions.app.fetchUserProfileCount(dispatch))
  }, [dispatch])
  */
  return (
    <ToastProvider autoDismiss autoDismissTimeout={2000}>
      <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
    </ToastProvider>
  );
}

export default App;

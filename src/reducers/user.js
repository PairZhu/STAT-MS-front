const initState = {
    loginInfo: {},
}

const loginInfo = (state=initState,action) => {
    switch(action.type) {
        case 'SET_LOGIN':
            return {
                loginInfo: {
                    ...state.loginInfo,
                    ...action.payload,
                },
            }
        case 'LOGIN_OUT':
            return { }
        default:
            return state
    }
}
export default loginInfo
const initialState = {
  users: [
    {
      name: 'Orlando',
      email: 'orlando@chilecompra.cl',
      password: 'orlando123'
    }, {
      name: 'Oscar',
      email: 'oscar@chilecompra.cl',
      password: 'oscar123'
    }
  ]
}

console.log('hh')

function loginFormReducer (state = initialState, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export default loginFormReducer

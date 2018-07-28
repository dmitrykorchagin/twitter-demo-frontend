function userDataFetch(userData) {
  return {
    type: 'USER_DATA_FETCH',
    userData,
  };
}

export default function userDataFetchData(id) {
  return (dispatch) => {
    const token = process.env.REACT_APP_ACCESS_TOKEN || '';
    fetch(`https://twitter-demo.erodionov.ru/api/v1/accounts/${id}?access_token=${token}`)
      .then(response => response.json())
      .then(userData => dispatch(userDataFetch(userData)));
  };
}

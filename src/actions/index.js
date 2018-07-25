function userDataFetch(userData) {
  return {
    type: 'USER_DATA_FETCH',
    userData,
  };
}

export default function userDataFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusMessage);
        }

        return response;
      })
      .then(response => response.json())
      .then(userData => dispatch(userDataFetch(userData)));
  };
}

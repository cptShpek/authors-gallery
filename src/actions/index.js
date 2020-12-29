import { appActionsType } from '../constants';

export const getAllAuthors = () => {
  return (dispatch) => {
    fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: appActionsType.GET_ALL_AUTHORS, authorsList: res });
      });
  };
};

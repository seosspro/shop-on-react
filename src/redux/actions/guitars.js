import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
});
export const fetchGuitars = (category, sortBy) => dispatch => {
    dispatch(setLoaded(false));


    axios
        .get(
            `http://localhost:3001/guitars?${
                category !==null ? `category=${category}` : ''
            }&_sort=${sortBy.type}&_order=${sortBy.order}`
        )
        .then(({ data }) => {
            dispatch(setGuitars(data));
        });
};

export const setGuitars = items => ({
    type: 'SET_GUITARS',
    payload: items,
});

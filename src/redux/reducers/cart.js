const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GUITAR_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            };

            const allGuitars = [].concat.apply([], Object.values(newItems));
            const totalPrice = allGuitars.reduce(
                (sum, obj) => obj.price + sum,
                0
            );

            return {
                ...state,
                items: newItems,
                totalCount: allGuitars.length,
                totalPrice,
            };
        }
        default:
            return state;
    }
};

export default cart;

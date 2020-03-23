const ADDITEMTOORDER = 'addItemToOrder';
const DELETEITEMFROMORDER = 'deleteItemFromOrder';
const CLEARCART = 'clearCart';
const CHANGEAMOUNT = 'changeAmount';
const SETTOTALPRICE = 'setTotalPrice';

const initionalState = {
    items: [],
    totalPurchasePrice: 0
};

export const cartReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADDITEMTOORDER:
            return {
                ...state,
                items: [...state.items].some(el => el.model === action.newItem.model) ?
                    [...state.items].map(el => (el.model === action.newItem.model) ? {
                        ...el,
                        amount: ++el.amount,
                        totalPrice: el.price * el.amount
                    } : el)
                    :
                    [...state.items, action.newItem]
            }
        case DELETEITEMFROMORDER:
            return {
                ...state,
                items: state.items.filter(el => {
                        if (el.model !== action.model) {
                            return el
                        }
                        return el
                    }
                )
            }
        case CLEARCART:
            return {
                ...state,
                items: []
            }
        case CHANGEAMOUNT:
            return {
                ...state,
                items: [...state.items].map(el => (el.model === action.model) ? {
                    ...el,
                    amount: action.amount,
                    totalPrice: action.amount * el.price
                } : el)
            }
        case SETTOTALPRICE:
            return {
                ...state,
                items: [...state.items],
                totalPurchasePrice: [...state.items].reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.totalPrice;
                }, 0)
            }
        default:
            return state;
    }
}

export const addItemOrder = (newItem) => {
    return {type: ADDITEMTOORDER, newItem: {...newItem, amount: 1, totalPrice: newItem.price}}
}

export const deleteItemFromOrder = (model) => {
    return {type: DELETEITEMFROMORDER, model}
}

export const clearCart = () => {
    return {type: CLEARCART}
}

export const changeAmount = (amount, model) => {
    return {type: CHANGEAMOUNT, amount, model}
}

export const setTotalPrice = () => {
    return {type: SETTOTALPRICE}
}

export const addItemOrderThunk = (newItem) => (dispatch) => {
    dispatch(addItemOrder(newItem));
    dispatch(setTotalPrice());
}

export const changeAmountThunk = (amount, model) => (dispatch) => {
    dispatch(changeAmount(amount, model));
    dispatch(setTotalPrice());
}

export const deleteItemFromOrderThunk = (model) => (dispatch) => {
    dispatch(deleteItemFromOrder(model));
    dispatch(setTotalPrice());
}
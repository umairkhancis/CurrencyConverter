import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT, swapCurrencies, changeCurrencyAmount } from '../actions/currencies';

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'PKR',
    amount: 100,
    conversions: {},
};

// if the state is undefined for the first time, initializes it with intial state.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            };
        case CHANGE_CURRENCY_AMOUNT: 
            return {
                ...state,
                amount: action.amount || 0,
            };
        default:
            return state; // return the current state as is.
    }
};

console.log('initial state', initialState);
console.log('swap currency', reducer(initialState, swapCurrencies()));
console.log('change currency amount', reducer(initialState, changeCurrencyAmount(200)));

export default reducer;
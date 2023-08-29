const { createSlice } = require('@reduxjs/toolkit');

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        currencySymbol: "₩",
        currencyName: "KRW",
        currencyRate: 1
    },
    reducers: {
        setCurrency(state, action) {
            const currencyName = action.payload;

            if (currencyName === "KRW") {
                return state = {
                    currencySymbol: "₩",
                    currencyRate: 1,
                    currencyName
                };
            }
            if (currencyName === "USD") {
                return state = {
                    currencySymbol: "$",
                    currencyRate: 1,
                    currencyName
                };
            }
            if (currencyName === "EUR") {
                return state = {
                    currencySymbol: "€",
                    currencyRate: 1,
                    currencyName
                };
            }
            if (currencyName === "GBP") {
                return state = {
                    currencySymbol: "£",
                    currencyRate: 1,
                    currencyName
                };
            }
        }
    },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;

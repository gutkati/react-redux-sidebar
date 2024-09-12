import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from '../parts/categorySlice'

export default configureStore({
    reducer: {
        category: categoryReducer
    }
})
import {createSlice, nanoid} from "@reduxjs/toolkit";

let arrInitial = [
    {
        id: nanoid(),
        category: 'Семья',
        contacts: [
            {
                name: 'папа',
                description: '',
                phone: 89199006753,
            }
        ]
    }
]

const categorySlice = createSlice({
    name: 'category',
    initialState: arrInitial,
    reducers: {}
})

export default categorySlice.reducer
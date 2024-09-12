import {createSlice, nanoid} from "@reduxjs/toolkit";

let arrInitial = [
    {
        id: nanoid(8),
        category: 'Семья',
        contacts: [
            {
                id: nanoid(6),
                name: 'папа',
                description: 'Домашний номер',
                phone: 89100006700,
            },

            {
                id: nanoid(6),
                name: 'мама',
                description: 'рабочий номер',
                phone: 89100002211,
            }
        ]
    },

    {
        id: nanoid(8),
        category: 'Друзья',
        contacts: [
            {
                id: nanoid(6),
                name: 'Алина Фомина',
                description: 'Домашний номер',
                phone: 87102006700,
            },

            {
                id: nanoid(6),
                name: 'Аня Горшенина',
                description: 'рабочий номер',
                phone: 89100555211,
            }
        ]
    }
]

const initialState = {
    category: arrInitial
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoryAdded: {
            reducer(state, action) {
                state.category.push(action.payload)
            },
            prepare(category, contacts) { // возвращать объект payload со сгенерированным id и другими нашими данными:
                return {
                    payload: {
                        id: nanoid(),
                        category,
                        contacts
                    },
                }
            }
        }
    }
})

export const {categoryAdded} = categorySlice.actions

export default categorySlice.reducer

export const selectAllCategories = (state) => state.category.category

export const selectCategoryById = (state, contactId) =>
    state.category.category.find(category => category.id === contactId)


export const selectContactsId = (state, contactId) =>
    state.category.category.find(contact => {
        if (contact.id === contactId) {
            return contact.contacts
        }
    })


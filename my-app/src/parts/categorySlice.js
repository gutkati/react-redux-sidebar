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

const categorySlice = createSlice({
    name: 'category',
    initialState: arrInitial,
    reducers: {}
})

export default categorySlice.reducer

export const selectAllCategories = (state) => state.category


export const selectContactsId = (state, contactId) =>
    state.category.find(contact => {
        if (contact.id === contactId) {
            return contact.contacts
        }
    })


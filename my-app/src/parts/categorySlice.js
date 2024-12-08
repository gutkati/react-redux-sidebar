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
        },
        contactsAdded: {
            reducer(state, action) {
                const {contactId} = action.payload
                console.log('---', action.payload)
                state.category.map(category => {

                    if (category.id === contactId) {
                        category.contacts.push(action.payload)
                    }
                })
            },
            prepare(contactId, name, description, phone) { // возвращать объект payload со сгенерированным id и другими нашими данными:
                return {
                    payload: {
                        contactId,
                        id: nanoid(6),
                        name,
                        description,
                        phone
                    },
                }
            }
        }
    }
})

export const {categoryAdded, contactsAdded} = categorySlice.actions

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

const createNewList = (id, input) => {
    const newCards = this.state.cards.map(card => {
        if (card.id === id) card.list = [...card.list, input];
        return card;
    });

    this.setState({
        cards: newCards
    });
};


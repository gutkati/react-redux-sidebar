import React from 'react';
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";

const Root = () => {
    return (
        <>
       <Header/>
       <Sidebar/>
       </>
    );
};

export default Root;

// const titleCategory = useSelector(state => selectCategoryById(state, categoryId))

// export const selectCategoryById = (state, categoryId) =>
//     state.category.find(category => category.id === categoryId)

import React from 'react';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';

const Home = () => {
    const { values, handleChanges } = useForm();
    return (
        <RootLayout>
            <form className="form-group p-2">
                <label htmlFor="" className="text-info">title</label>
                <input 
                name="title"
                value={values.title || ''}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <label htmlFor="" className="text-info">author</label>
                <input 
                name="author"
                value={values.author || ''}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <label htmlFor="" className="text-info">price</label>
                <input 
                name="price"
                value={values.price || ''}
                onChange={handleChanges}
                type="text" 
                className="form-control" />
                <label htmlFor="" className="text-info">genre</label>
            </form>
        </RootLayout>
    )
}

export default Home;

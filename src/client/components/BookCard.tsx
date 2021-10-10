import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Books } from '../../../types';
import { apiService } from '../utils/api-service';

const BookCard = ({ id, title, author, price, categoryid, isPreview }: Books) => {
    const history = useHistory();
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(confirm(`Are you sure you want to delete?`)){
            apiService(`/api/books/${id}`, 'DELETE', { title, author, price, categoryid })
                .then(data => {
                    history.push('/books');
                });
        }
    };
    return (
        <div className="card">
            <h1 className="card-title">{title}</h1>
            <div className="card-body">
                <h2 className="card-text">{author}</h2>
                <h3 className="card-text">{price}</h3>
            </div>
            <div className="d-flex justify-content-center">
                {isPreview && <Link className="btn btn-info mx-3" to={`/edit/${id}`}>edit</Link>}
                {isPreview && <button className="btn btn-info mx-3" onClick={handleDelete} >delete</button>}
            </div>
        </div>
    )
}

export default BookCard;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Books } from '../../../types';
import BookCard from '../components/BookCard';
import RootLayout from '../components/RootLayout';
import { apiService } from '../utils/api-service';

const BookDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Books[]>([]);
    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(data => setBook(data));
    }, []);
    return (
        <RootLayout>
            <BookCard {...book} key={id} isPreview />
        </RootLayout>
    )
}

export default BookDetails;

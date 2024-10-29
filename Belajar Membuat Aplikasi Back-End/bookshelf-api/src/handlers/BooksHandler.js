const { nanoid } = require('nanoid');
const books = require('../model/books');

const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    // Check if the name property is missing
    if (!name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    // Check if readPage is greater than pageCount
    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = readPage === pageCount;

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt,
    };

    books.push(newBook);

    const isSuccess = books.some((book) => book.id === id);

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;
    }

    // Handle other failure cases, if any
    const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
};

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    let filteredBooks = books;

    // Filter books by name if the query parameter is provided
    if (name) {
        filteredBooks = filteredBooks.filter((book) =>
            book.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    // Filter books by reading status if the query parameter is provided
    if (reading !== undefined) {
        const isReading = reading === '1';
        filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
    }

    // Filter books by finished status if the query parameter is provided
    if (finished !== undefined) {
        const isFinished = finished === '1';
        filteredBooks = filteredBooks.filter((book) => book.finished === isFinished);
    }

    // Map the filtered books to only include the necessary information
    const responseBooks = filteredBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));

    // Return the response with the filtered books
    return h.response({
        status: 'success',
        data: {
            books: responseBooks,
        },
    }).code(200);
};

const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    // Find the book with the specified id
    const book = books.find((n) => n.id === bookId);

    if (book) {
        // If the book is found, return a success response with status code 200
        return h.response({
            status: 'success',
            data: {
                book,
            },
        }).code(200);
    }

    // If the book is not found, return a fail response with status code 404
    return h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    }).code(404);
};

const editBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;

    // Check if the name property is present
    if (!name) {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        }).code(400);
    }

    // Check if readPage is greater than pageCount
    if (readPage > pageCount) {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
    }

    // Find the index of the book with the given id
    const index = books.findIndex((book) => book.id === bookId);

    // Check if the book exists
    if (index === -1) {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan',
        }).code(404);
    }

    // Update the book details
    books[index] = {
        ...books[index],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    };

    // Return success response
    return h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
    }).code(200);
};

const deleteBookByIdHandler = (request, h) => {
    const { bookId } = request.params;

    // Find the index of the book with the given id
    const index = books.findIndex((book) => book.id === bookId);

    // Check if the book exists
    if (index === -1) {
        return h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan',
        }).code(404);
    }

    // Remove the book from the array
    books.splice(index, 1);

    // Return success response
    return h.response({
        status: 'success',
        message: 'Buku berhasil dihapus',
    }).code(200);
};

module.exports = {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler
};
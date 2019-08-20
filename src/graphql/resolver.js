const books = [{
    id: 3,
    title: 'The Girl on the train',
    authors: [{id:2, name:'Paula Hawkins',age:30},{id:52, name:'Paula 5Hawkins',age:350}]
},
{
    id: 2,
    title: ' Girl on the train',
    authors: [{id:2, name:'Paula Hawkins',age:30},{id:52, name:'Paula 5Hawkins',age:350}]
}]

var resolvers = {
    Query: {
        getBooks(root, args) {
            return books;
        },
        getBookById(root, args) {
            const results = books.filter(({id}) => id == args.id);
            return results.length > 0 ? results[0] : {};
        }
    }
};

module.exports = resolvers;

const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// GET quotes
app.get("/api/quotes", (req, res,next) => {
    const person = req.query.person;
    console.log(person);
    // GET quote by author
    if (person) {
        const filteredQuotes = quotes.filter(item => {
            return item.person == person;
        });
        res.send({
            quotes: filteredQuotes
        });
    } 
    // GET all quotes
    else {
        res.send({
            quotes: quotes
        });
    }
    
});

// GET random quote
app.get("/api/quotes/random", (req, res, next) => {
    const quote = {
        quote: getRandomElement(quotes)
    };
    res.send(quote);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
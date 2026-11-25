const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
const db = require('./models');
//routers
const postRouter = require('./route/posts')
app.use("/posts", postRouter);

const commentsRouter = require('./route/Comments')
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
});



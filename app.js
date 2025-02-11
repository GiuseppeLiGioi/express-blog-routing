const express = require ("express");
const app= express();
const port = 3000;
const postsRouter = require ('./routers/posts.js')

//per mettere le immagini, faccio riferiemnto alla cartella public
app.use(express.static ('public'));

app.get("/" , (req, res)=>{
    res.type('html').send(

    )

    app.use("/api/posts", postsRouter)
});
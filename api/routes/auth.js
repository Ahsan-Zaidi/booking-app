import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hi this is an auth endpoint")
})

router.get("/register", (req, res) => {
    res.send("Hello this is auth register endpoint")
})

export default router;
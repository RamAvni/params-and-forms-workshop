import express from "express";
import { createDogTable } from "../functions/createDogTable.js";
// import { cache } from "../fcache/fcache";

// FIRST PART - PARAMS

/* GET home page. */
const router = express.Router();

router.get("/", function (_, res) {
  res.send(` 
  <style>
  body{
    background: black;
    color: rgb(74, 255, 37);
    padding:10px;
    font-size:20px;
  }
  </style>
  
  Hello, I am main page`);
});

router.get("/params", function (req, res) {
  res.send(
    `<style>
      body{
        background: black;
        color: rgb(74, 255, 37);
        padding:10px;
        font-size:20px;
      }</style>
    
      <pre style="filter:hue-rotate(${Math.ceil(Math.random() * 360)}deg)">` +
      JSON.stringify(req.query, undefined, 4) +
      `</pre>`,
  );
});

// SECOND PART - FORMS

router.post("/add-dog-page/add-one", (_, res) => {
  //add a dog using the cache.addOne() function with the dog from form.
  res.send(createDogTable(/*send all dogs using cache.getAll() */));
});

router.get("/filter-by-breed", (_, res) => {
  /**
   * get dogs using cache.getAll()
   * filter dogs by breed from user
   */
  res.send(createDogTable(/* send filtered dogs to createdogTable */));
});

router.post("/add-many-dogs", function (_, res) {
  //add dogs using the cache.addMany() function with the dogs from form.
  res.send(createDogTable(/*send all dogs using cache.getAll() */));
});

export default router;

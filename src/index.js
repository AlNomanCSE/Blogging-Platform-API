import express from "express";
import connectDB from "./db/database.js";
import "dotenv/config";

const app = express();

connectDB();

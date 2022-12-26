// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from 'universal-cookie'
import axios from "axios";
import { useState } from 'react';


const url = 'http://127.0.0.1:8000';



export const getPosts = async () => {
 
  return await axios.get(`${url}/api/getPosts`);
}
"use server"

export async function getData() {
    const res = await fetch(
      "https://dummyjson.com/products?limit=9&skip=10&select=id,title,category,price,description,images"
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
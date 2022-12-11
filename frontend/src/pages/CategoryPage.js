import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React, { Component } from 'react'
import axios from "axios";
import ItemComponent from "../components/ItemComponent";

function CategoryPage() {
    const { category } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`/searchcategory/${category}`).then((response) => {
        //   console.log(response.data.products);
          setList(response.data.products);
        });
      }, [category]);


    return(
        <div className="item-containers">
            {
                list.map(item=>{
                    return(
                        <ItemComponent
                        itemID = {item.id}
                        title = {item.title}
                        description = {item.description}
                        price = {item.price}
                        rating = {item.rating}
                        image = {item.images[0]}
                        ></ItemComponent>
                    )
                })
            }
        </div>
    )
}



export default CategoryPage;




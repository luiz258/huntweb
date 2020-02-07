import React , {Component} from "react";
import api from "./../../service/api";

export default class Main extends Component{
    state ={
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get("/products");
        console.log(response.data.docs);

        this.setState({ products: response.data.docs});
    }

    render(){
    return (
        <div className="product-list">
            {this.state.products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <a>Acessar</a>
                </article>
            ))}
        </div>
    );
    }
}

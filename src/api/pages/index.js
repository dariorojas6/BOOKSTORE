import { useAppContext } from "../store/store"

import Layout from "../components/layout"
import Book from "../components/book";

export default function Index() {
    const store = useAppContext();

    const booksContainer = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    }
     const caja = { 
        fontFamily: "sans-serif", 
        fontSize: "25px", 
        fontWeight: "400", 
        color: "#ffffff", 

        margin: "15px",
        textAlign: "center"
     }
        
    return (
        <Layout>
            <div style={caja}>Book Store</div>
            <div style={booksContainer}>
                {store.items.map((item) => (
                    <Book key={item.id} item={item}></Book>
                ))}
            </div>
        </Layout>


    );
}
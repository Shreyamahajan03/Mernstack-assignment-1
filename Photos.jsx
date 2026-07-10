import useFetch from "./useFetch";
import "./Photos.css";

function Photos() {

   const { data, loading, error } = useFetch(
  "https://api.escuelajs.co/api/v1/products"
);
    if (loading) {
        return <h1 className="loading">Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }
    console.log(data);
    return (

        <div className="container">

            <h1>Photos</h1>

            <div className="photo-grid">

                {data.map((item) => (

                    <div className="card" key={item.id}>

                        <img
                            src={item.images[0]} 
                            alt={item.title}
            
                        />

                        <p>{item.title}</p>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Photos;

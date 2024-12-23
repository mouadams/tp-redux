import { useSelector, useDispatch } from "react-redux";
import Posts from "./posts";
import { fetchPosts } from "./postsActions";
import { useEffect } from "react";

export default function App() {
    const { loading, error, data } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchPosts());
    },[]);

    return (
        <>
            {loading && (
                <h1 className="text-xl font-semibold text-center text-blue-500">Chargement...</h1>
            )}
            {!loading && error && (
                <h3 className="text-lg font-medium text-center text-red-500">Erreur: {error}</h3>
            )}
            {!loading && !error && (
                <div className="text-center">
                    <h3 className="mb-4 text-xl font-semibold text-green-600">
                        Nombre de posts: {data.length}
                    </h3>
                    <Posts />
                </div>
            )}
        </>
    );
    
    
}

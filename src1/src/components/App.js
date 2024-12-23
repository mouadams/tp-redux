import { useSelector, useDispatch } from "react-redux";
import Posts from "./posts";
import { fetchPosts } from "./postsActions";

export default function App() {
    const { loading, error, data } = useSelector((state) => state);
    const dispatch = useDispatch();

    const charger = () => {
        dispatch(fetchPosts());
    };

    return (
        <>
            <button onClick={charger}>Charger posts</button>
            {loading && <h1>Chargement...</h1>}
            {!loading && error && <h3>Erreur: {error}</h3>}
            {!loading && !error && (
                <div>
                    <h3>Nombre de posts: {data.length}</h3>
                    <Posts />
                </div>
            )}
        </>
    );
}

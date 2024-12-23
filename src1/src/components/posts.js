import { useSelector } from "react-redux";

export default function Posts() {
    const posts = useSelector((state) => state.data);
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>Price: ${post.price}</p>
                    <p>Category: {post.category}</p>
                    {post.rating && post.rating.rate !== undefined ? (
                        <p>
                            Rating: {post.rating.rate} ({post.rating.count || 0}{" "}
                            reviews)
                        </p>
                    ) : (
                        <p>Rating: Not available</p>
                    )}
                </li>
            ))}
        </ul>
    );
}

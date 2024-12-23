import { useSelector } from "react-redux";

export default function Posts() {
    const posts = useSelector((state) => state.data);
    
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <li key={post.id} className="overflow-hidden transition-shadow duration-300 bg-white shadow-xl rounded-xl hover:shadow-2xl">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="object-cover w-full h-64 rounded-t-xl" 
                    />
                    <div className="p-4">
                        <h3 className="text-2xl font-bold text-gray-800 truncate">{post.title}</h3>
                        <p className="mt-2 text-lg text-green-500">Price: ${post.price}</p>
                        <p className="mt-1 text-sm text-gray-500">Category: {post.category}</p>
                        {post.rating && post.rating.rate !== undefined ? (
                            <p className="mt-2 text-sm text-yellow-500">
                                Rating: {post.rating.rate} ({post.rating.count || 0} reviews)
                            </p>
                        ) : (
                            <p className="mt-2 text-sm text-gray-500">Rating: Not available</p>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}




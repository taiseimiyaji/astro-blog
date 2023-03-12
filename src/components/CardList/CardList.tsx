import type { CollectionEntry } from "astro:content";
import "./CardList.scss";
import Card from "../Card/Card";

export default function CardList(content: any) {
    
    const { posts } = content;

    return (
        <div className="card-list">
            {posts.map((post: any) => {
                return (
                    <div key={post.slug}>
                        <Card content={post} />
                    </div>
                )
            })}
        </div>
    );
}
import type { CollectionEntry } from "astro:content";
import "./CardList.scss";
import Card from "../Card/Card";

type CardListProps = {
	posts: CollectionEntry<"blog">[];
};

export default function CardList({ posts }: CardListProps) {

	return (
		<div className="card-list">
			{posts.map((post) => {
				return (
					<div key={post.slug}>
						<Card content={post} />
					</div>
				);
			})}
		</div>
	);
}

import "./Card.scss";
import { getNowDateWithString } from "../../utils/date";
import type { CollectionEntry } from "astro:content";

type CardProps = {
	content: CollectionEntry<"blog">;
};

export default function Card({ content }: CardProps) {
	return (
		<div>
			<a href={`/posts/${content.id}`}>
				<div className="card">
					<div className="date">
						{getNowDateWithString(content.data.createDate)}
					</div>
					<div className="title">{content.data.title}</div>
				</div>
			</a>
		</div>
	);
}

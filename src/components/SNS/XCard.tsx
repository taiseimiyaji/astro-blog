import { FaXTwitter } from "react-icons/fa6";

export default function XCard({ url }: { url: string }) {
	return (
		<div>
			<a href={url} target="_blank" rel="noopener">
				<div className="sns-button">
					<FaXTwitter /> X
				</div>
			</a>
		</div>
	);
}

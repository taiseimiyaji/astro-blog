import { FaGithub } from "react-icons/fa";

export default function GitHubCard({ url }: { url: string }) {
	return (
		<div>
			<a href={url} target="_blank">
				<div className="sns-button">
					<FaGithub /> GitHub
				</div>
			</a>
		</div>
	);
}

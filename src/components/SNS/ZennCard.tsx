import { SiZenn } from "react-icons/si";

export default function ZennCard({ url }: { url: string }) {
	return (
		<div>
			<a href={url} target="_blank" rel="noopener">
				<div className="sns-button">
					<SiZenn /> Zenn
				</div>
			</a>
		</div>
	);
}

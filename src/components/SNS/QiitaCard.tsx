import { SiQiita } from "react-icons/si";

export default function QiitaCard({ url }: { url: string }) {
	return (
		<div>
			<a href={url} target="_blank">
				<div className="sns-button">
					<SiQiita /> Qiita
				</div>
			</a>
		</div>
	);
}

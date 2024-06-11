import "./Footer.scss";

export default function Footer() {
	return (
		<div className="footer">
			<div className="copyright">©︎ 2023 taisei miyaji</div>
			<div className="icons">
				<span className="github">
					<a href="https://github.com/taiseimiyaji" target="_blank">
						<img
							src="/github-mark/github-mark-white.png"
							width="100%"
							height="100%"
							alt="github"
						></img>
					</a>
				</span>
			</div>
		</div>
	);
}

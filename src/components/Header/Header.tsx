import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <div className="title">
                <a href="/">Lyricrime.com</a></div>
            <div className="header-link">
                <a href="/">
                    <div> Blog</div>
                </a>
                <a href="/activity">
                    <div>Activity</div>
                </a>
                <a href="/profile">
                    <div>Profile</div>
                </a>
            </div>
        </div>
    );
}
import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <div className="title">Lyricrime.com</div>
            <div className="header-link">
                <a href="/">
                    <div> Blog</div>
                </a>
                <div>Activity</div>
                <div>SNS</div>
            </div>
        </div>
    );
}
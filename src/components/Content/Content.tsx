import "./Content";
import Sidebar from "../Sidebar/Sidebar";
import Article from "../Article/Article";

export default function Content() {
    return (
        <div className="content">
            <Article></Article>
            <Sidebar></Sidebar>
        </div>
    );
}
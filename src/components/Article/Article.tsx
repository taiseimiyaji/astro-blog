import "./Article";
import { CollectionEntry, getCollection, getEntryBySlug } from "astro:content";
const entry = await getEntryBySlug('blog', 'post-1');

export default function Article() {

    return (
        <div>
            
        </div>
    );

}

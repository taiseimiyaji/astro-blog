import './Card.scss';
import type { article } from '../../entities/article';
import { getNowDateWithString } from '../../utils/date';
import type { CollectionEntry } from 'astro:content';

export default function Card(content: CollectionEntry<"blog">) {
    return (
        <div>
            <a href={ "/posts/" + content.content.slug}>
                <div className='card'>
                    <div className='date'>
                        {getNowDateWithString(content.content.data.createDate)}
                    </div>
                    <div className='title'>
                        {content.content.data.title}
                    </div>
                </div>
            </a>
        </div>
    );
}

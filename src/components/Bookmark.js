import styles from './Bookmark.module.css'
import Main from '../routes/Main.js';

function Bookmark({bookmark}){

    return (
        <div>
            <div>
                <h1 className={styles.bookmark_text}> BOOKMARK </h1>
                <hr/>
                <h5 className={styles.count_text}> COUNT : {bookmark.length}</h5>
                <ul className={styles.bookmark_list}>
                    {bookmark.map((item) => (
                    <li key={item.id}>
                        <img src={item} alt="movie"/>
                        
                    </li>
                    ))}
                </ul>
            </div>         
        </div>
    )
}


export default Bookmark;
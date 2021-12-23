import React from 'react';
import { useState } from "react";
import SingleComment from './SingleComment';
import styles from './Comment.module.css'

function Comment(){
    const [comments, setComments] = useState([]);

    const addComment = () => {
        let value = document.querySelector('#new-comment-content').value;
        let date = new Date().toISOString().slice(0, 10);
        let content = value;

        if (!value || value===' '){
            alert('댓글을 입력해주세요.');
            return false;
        }

        const newComment = [...comments, {date: date, content: content}];
        setComments(newComment);
    }
// console.log(comments);

    const onKeyPress = e => {
        if(e.key === 'Enter'){
            addComment();
        }
    }
    return(
        <div>
            <div>
                <div>
                    <input type="text" id="new-comment-content" onKeyPress={onKeyPress} placeholder='🎞영화 코멘트를 달아주세요'></input>
                    <button onClick={()=>addComment()} className={styles.add_button}>게시</button>
                </div>
                <div>
                    {comments.map((comment) => (
                        <SingleComment key={comment.content} date={comment.date} content={comment.content}/>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Comment;
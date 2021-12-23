import React from 'react';
import styled from 'styled-components';


const CommentBlock = styled.div`
    padding: 10px;
    margin-top: 30px;
    border-radius: 10px;
    background-color: #f1f1f1;
    border:2px solid #f1f1f1;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const TextLeft = styled.div`
    padding-left: 10px;
    text-align: left;
    font-size: 1.2em; 
`;

const TextRight = styled.div`
    text-align: right;
    font-size: 0.8em;
`;

function SingleComment({date, content}){
    return(
        <div>
            <CommentBlock>
                <TextLeft>{content}</TextLeft> 
                <TextRight>{date}</TextRight>
            </CommentBlock>
        </div>
    );
}
export default SingleComment;


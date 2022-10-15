import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이견희",
        comment: "안녕하세요, 소통해요",
    },
    {
        name: "하재현",
        comment: "리액트 굿",
    },
    {
        name: "홍길동",
        comment: "날씨 좋다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image : {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="data:image/jpeg;base64,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" alt="사진" style={styles.image} />
            </div>

             <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
    </div>
    );
}

export default Comment;
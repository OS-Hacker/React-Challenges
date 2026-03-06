function Comment({ comment }) {
  return (
    <div
      style={{
        marginLeft: "20px",
        borderLeft: "2px solid #ccc",
        padding: "8px",
      }}
    >
      <p>
        <strong>{comment.author}</strong>: {comment.text}
      </p>
      {/* Recursively render replies */}
      {comment.replies?.map((reply) => (
        <Comment key={reply.id} comment={reply} /> // ✅ Fixed: Added return and key
      ))}
    </div>
  );
}

export default Comment;

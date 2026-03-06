import Comment from "./Task";

const nestedComments = [
  {
    id: 1,
    author: "Alice",
    text: "This is a great post!",
    replies: [
      {
        id: 2,
        author: "Bob",
        text: "Thanks!",
        replies: [
          { id: 3, author: "Charlie", text: "I agree!" }, // Base case (no replies)
        ],
      },
    ],
  },
  {
    id: 4, // Changed ID to avoid duplicates
    author: "Om",
    text: "This is another post!",
    replies: [
      {
        id: 5,
        author: "Kumar",
        text: "Nice!",
        replies: [{ id: 6, author: "Charlie", text: "I agree too!" }],
      },
    ],
  },
];

function App40() {
  return (
    <div>
      {nestedComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default App40;

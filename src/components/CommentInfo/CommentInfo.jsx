export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div key={comment.id} className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>
      {' by '}

      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  </div>
);

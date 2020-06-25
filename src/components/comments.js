import React from 'react'
import s from './comments.module.scss'

const Comments = (props) => {
  return (
    <div>
      <form
        className={s.form}
        method="POST"
        action="https://<app_name>.herokuapp.com/v2/entry/<github_username>/<github_repo>/master/comments"
      >
        <input
          name="fields[slug]"
          type="hidden"
          value={props.slug}
        />
        <input name="fields[name]" type="text" placeholder="Name" required />
        <input
          name="fields[email]"
          type="email"
          placeholder="Email"
          required
        />
        <textarea name="fields[message]" placeholder="Comment" required />
        <button type="submit">Submit Comment</button>
      </form>
      {props.comments && props.comments.length ? (
        props.comments.map(comment => (
          <div key={comment.node._id}>
            <p>
              Name: {comment.node.name}
              <br />
              Comment: {comment.node.message}
              <br />
              Date: {comment.node.date}
            </p>
          </div>
        ))
      ) : (
          <p>No comments yet.</p>
        )}
    </div>
  )
}

export default Comments
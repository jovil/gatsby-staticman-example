import React from 'react'
import s from './comments.module.scss'

const Comments = (props) => {
  return (
    <div>
      <form
        className={s.form}
        method="POST"
        action="https://agile-basin-32146.herokuapp.com/v2/entry/jovil/gatsby-staticman-example/master/comments"
      >
        <input
          name="options[slug]"
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
    </div>
  )
}

export default Comments
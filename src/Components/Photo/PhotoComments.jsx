import React from 'react'
import { UserContext } from '../../UserContext'
import { PhotoCommentsForm } from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

export const PhotoComments = (props) => {

  const [comments, setComments] = React.useState(() => props.comments)
  const commentsSection = React.useRef(null)
  const { login } = React.useContext(UserContext)

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <div className={`${styles.comments} ${props.single ? styles.single : ''}`} ref={commentsSection}>
      {comments.map(comment =>
        <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} single={props.single} />}
    </div>
  )
}

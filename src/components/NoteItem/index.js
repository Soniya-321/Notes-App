// Write your code here
import {LiItem, LiHeading, LiPara} from './styledComponents'

const NoteItem = props => {
  const {notesList} = props
  const {title, note} = notesList
  return (
    <LiItem>
      <LiHeading>{title}</LiHeading>
      <LiPara>{note}</LiPara>
    </LiItem>
  )
}
export default NoteItem

// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Main,
  Heading,
  FormContainer,
  AddButton,
  Input,
  InputTextArea,
  Ul,
  Empty,
  Img,
  EmptyHeading,
  EmptyPara,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {id: uuidv4(), title, note}
    if (title.trim() !== '' || note.trim() !== '') {
      setNotesList(prevNotesList => [...prevNotesList, newNote])
      setNote('')
      setTitle('')
    }
  }

  return (
    <Main>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onSubmitForm}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <InputTextArea
          type="text"
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeNote}
        />
        <AddButton type="submit">Add</AddButton>
      </FormContainer>
      {notesList.length === 0 ? (
        <Empty>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyPara>Notes you add will appear here</EmptyPara>
        </Empty>
      ) : (
        <Ul>
          {notesList.map(each => (
            <NoteItem notesList={each} key={each.id} />
          ))}
        </Ul>
      )}
    </Main>
  )
}

export default Notes

/* eslint-disable react/prop-types */
import './LeftTab.css'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../functions/firebase';

export default function LeftTab(props) {
  function pdfUpload(event) {
    props.setFile(event.target.files[0]);
    console.log(event.target.files[0])
  }

  const saveCollectionRef = collection(db, "SavedFiles")

  async function saveFile() {
    await addDoc(saveCollectionRef, {test: "hi"})
  }

  return (
    <div className='lefttab-holder'>
      <div className='logo-holder'>
        <h2 className='name'> StudAI Hub </h2>
        <div className='logo'></div>
      </div>
      <div className='file-upload'>
        <label htmlFor="upload" className='file-upload-input'>Upload a PDF file</label>
        <input type="file" id="upload" accept=".pdf" onChange={pdfUpload} className='file-upload-input'/>
      </div>
      <div className='buttons'>
        <button className='tabs-button' style={{backgroundColor: props.contentNum === 0 && 'white', color: props.contentNum === 0 && 'black', opacity: props.contentNum === null && 0.2}} onClick={() => props.setContentNum(0)}> Quizzes </button>
        <button className='tabs-button' style={{backgroundColor: props.contentNum === 1 && 'white', color: props.contentNum === 1 && 'black', opacity: props.contentNum === null && 0.2}} onClick={() => props.setContentNum(1)}> Query </button>
        <button className='tabs-button' style={{backgroundColor: props.contentNum === 2 && 'white', color: props.contentNum === 2 && 'black', opacity: props.contentNum === null && 0.2}} onClick={() => props.setContentNum(2)}> Summary </button>
        <button className='tabs-button' style={{backgroundColor: props.contentNum === 3 && 'white', color: props.contentNum === 3 && 'black', opacity: props.contentNum === null && 0.2}} onClick={() => props.setContentNum(3)}> Flashcards </button>
      </div>
      <div className='save-title'>
        {props.splitText.length !== 0 && props.contentNum !== null ?
          <>
            {props.title === "" ?
              <button className='save-button' onClick={() => props.setSaving(true)}> Save </button>
              :
              <div className='title-left-tab'>
                <h4 className='you-are-viewing'> You are Viewing: </h4>
                <p className='file-title'> {props.title} </p>
              </div>
            }
          </>
          :
          null
        }
      </div>
    </div>
  )
}

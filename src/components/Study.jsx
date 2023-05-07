/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Study.css'
import Quiz from './study/Quiz';
import Query from './study/Query';
import Summary from './study/Summary';
import Flashcards from './study/Flashcards';
import Save from './study/save';

export default function Study(props) {

  function pdfUpload(event) {
    props.setFile(event.target.files[0]);
    console.log(event.target.files[0])
  }

  return (
    <div className='study'>
      {props.saving ?
        <Save setSaving={props.setSaving}/>
        :
        <>
          {props.splitText.length === 0 ? 
            <div className='no-file'>
              <label htmlFor="upload" className='content-label-upload'>Upload a PDF file</label>
              <input type="file" id="upload" accept=".pdf" onChange={pdfUpload} className='file-upload-input'/>
            </div>
            :
            <div className='study-holder'>
              {props.contentNum === 0 &&
                <Quiz
                  multipleChoiceItems={props.multipleChoiceItems} 
                  setMultipleChoiceItems={props.setMultipleChoiceItems} 
                  splitText={props.splitText}
                  conceptItems={props.conceptItems}
                  setConceptItems={props.setConceptItems}
                  viewMultipleChoice={props.viewMultipleChoice}
                  setViewMultipleChoice={props.setViewMultipleChoice}/>}
              {props.contentNum === 1 &&
                <Query
                  embeddedChunks={props.embeddedChunks}
                  splitText={props.splitText}/>}
              {props.contentNum === 2 &&
                <Summary            
                  summarizedChunks={props.summarizedChunks}
                  setSummarizedChunks={props.setSummarizedChunks}
                  splitText={props.splitText}/>}
              {props.contentNum === 3 &&
                <Flashcards/>}
            </div>
          }
        </>
        }
    </div>
  )
}
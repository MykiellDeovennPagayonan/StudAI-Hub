/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Query.css'
import answerQuery from '../../functions/answerQuery';

export default function Query(props) {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")

  async function answer() {
    setResponse("...Trying to answer that...")
    const responseInitial = await answerQuery(query, props.embeddedChunks, props.splitText)
    setResponse(responseInitial)
  }

  return (
    <div className="query-container">
      <div className="response">
        <div className='response-text'>
          <h4>{response}</h4>
        </div>
      </div>
      <div className="query-button-container">
        <input type="text" placeholder={"ask"} onChange={(e) => setQuery(e.target.value)} className='message'></input>
        <button onClick={answer} className='submit-message'>Query</button>
      </div>
    </div>
  );
}

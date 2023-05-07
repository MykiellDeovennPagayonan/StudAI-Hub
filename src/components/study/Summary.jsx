/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Summary.css'
import summarize from '../../functions/summarize'

export default function Summary(props) {
  const [messageSummary, setMessageSummary] = useState("Generate a summary")

  async function handleCreateSummary() {
    setMessageSummary("Generating Summary")
    let summaryCount = 0
    let summarizedChunkcInitial = []
    for (let i = 0; i < props.splitText.length; i++) {
      let summaryContent = await summarize(props.splitText[i])
      console.log(summaryContent)
      summarizedChunkcInitial.push(summaryContent)
      summaryCount++
      setMessageSummary(`Generating Summary (${summaryCount}/${props.splitText.length})`)
    }
    props.setSummarizedChunks(summarizedChunkcInitial)
  }

  return (
    <>
      {props.summarizedChunks.length === 0 ?
        <button className='create-summary' onClick={handleCreateSummary}>
          <h3>{messageSummary}</h3>
        </button>
        :
        <div className='summary-section-content'>
          <div className='summary'>
            <div className='summary-holder'>
            {props.summarizedChunks.map((item) => {
              return (
                <>
                  <p className='text'>{"     " + item}</p>
                </>
              )
            })}
            </div>
          </div>
      </div>
      }
    </>
  )
}
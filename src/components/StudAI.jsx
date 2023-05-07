/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './StudAI.css'
import LeftTab from './LeftTab'
import Study from './Study'
import pdfExtractText from '../functions/pdfExtractText'
import handleSplitText from '../functions/splitText'
import embed from '../functions/embed'
import TopNav from './TopNav'
import History from './History'
import Community from './Community'
import { ItemMultipleChoice } from '../classes/quizMultipleChoiceClass'
import { ItemConcept } from '../classes/quizConceptClass'

export default function StudAI(props) {
  const [pageNum, setPageNum] = useState(0)
  const [contentNum, setContentNum] = useState(0)
  const [file, setFile] = useState(null);
  const [splitText, setSplitText] = useState([])
  const [multipleChoiceItems, setMultipleChoiceItems] = useState([])
  const [conceptItems, setConceptItems] = useState([])
  const [embeddedChunks, setEmbeddedChunks] = useState([])
  const [summarizedChunks, setSummarizedChunks] = useState([])
  const [viewMultipleChoice, setViewMultipleChoice] = useState(false)
  const [title, setTitle] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (file === null) {
      setContentNum(null)
    }
  }, [contentNum])

  useEffect(() => {
    if (file !== null && file !== " ") {
      console.log(file)
      ingestData()
      setPageNum(0)
      setContentNum(0)
      setSplitText([])
      setMultipleChoiceItems([])
      setConceptItems([])
      setEmbeddedChunks([])
      setSummarizedChunks([])
      setTitle("")
    }
    console.log(file)
  }, [file])

  useEffect(() => {
    toEmbed()
  }, [splitText])



  async function ingestData() {
    const text = await pdfExtractText(file)
    const splitTextInitial = handleSplitText(text)
    setSplitText(splitTextInitial)
  }

  async function toEmbed() {
    const embeddedChunksInitial = await embed(splitText)
    setEmbeddedChunks(embeddedChunksInitial)
  }

  async function loadNew(file) {
    let multipleChoiceItemsInitial = []
    let conceptItemsInitial = []

    for (let i = 0; i < file.multipleChoiceItems.length; i++) {
      let itemMultipleChoiceInitial = new ItemMultipleChoice()
      itemMultipleChoiceInitial.setQuestion(file.multipleChoiceItems[i].question)
      itemMultipleChoiceInitial.setChoices(file.multipleChoiceItems[i].choices)
      itemMultipleChoiceInitial.setAnswer(file.multipleChoiceItems[i].answer)
      multipleChoiceItemsInitial.push(itemMultipleChoiceInitial)
    }

    for (let i = 0; i < file.conceptItems.length; i++) {
      let itemConceptInitial = new ItemConcept()
      itemConceptInitial.setQuestion(file.conceptItems[i].question)
      itemConceptInitial.setAnswer(file.conceptItems[i].answer)
      conceptItemsInitial.push(itemConceptInitial)
    }

    setFile(" ")
    setTitle(file.title)
    setMultipleChoiceItems(multipleChoiceItemsInitial)
    setSplitText(file.splitText)
    setConceptItems(conceptItemsInitial)
    setEmbeddedChunks(file.embeddedChunks)
    setSummarizedChunks(file.summarizedChunks)
  }

  return (
    <>
      <LeftTab
        contentNum={contentNum}
        setContentNum={setContentNum}
        setFile={setFile}
        title={title}
        setSaving={setSaving}
        splitText={splitText}/>
      <div className='right-content'>
        <TopNav
          loggedIn={props.loggedIn} 
          setLoggedIn={props.setLoggedIn}
          pageNum={pageNum}
          setPageNum={setPageNum}
          setContentNum={setContentNum}/>
        {pageNum === 0 &&
          <Study
            embeddedChunks={embeddedChunks}
            contentNum={contentNum}
            file={file}
            setFile={setFile}
            splitText={splitText} 
            multipleChoiceItems={multipleChoiceItems} 
            setMultipleChoiceItems={setMultipleChoiceItems}
            conceptItems={conceptItems}
            setConceptItems={setConceptItems}
            summarizedChunks={summarizedChunks}
            setSummarizedChunks={setSummarizedChunks}
            viewMultipleChoice={viewMultipleChoice}
            setViewMultipleChoice={setViewMultipleChoice}
            saving={saving}
            setSaving={setSaving}/>}
        {pageNum === 1 &&
          <History
            setContentNum={setContentNum}
            setPageNum={setPageNum}
            loadNew={loadNew}/>}
        {pageNum === 2 &&
          <Community
            setContentNum={setContentNum}
            setPageNum={setPageNum}
            loadNew={loadNew}/>}
      </div>
    </>
  )
}

/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Save.css'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../functions/firebase'

export default function Save(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isPublic, setIsPublic] = useState(false)

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  };

  const handleIsPublicChange = (e) => {
    setIsPublic(e.target.checked)
  };

  const handlePost = async () => {
    if (!title || !description) {
      alert("Please enter a title and a description.")
      return
    }

    if (auth.currentUser === null) {
      alert("please log in to save/check if you are connected to the internet")
      return
    }

    let multipleChoiceItems = []

    for (let i = 0; i < props.multipleChoiceItems.length; i++) {
      let muplitpleChoiceItemInitial = {
        question: props.multipleChoiceItems[i].getQuestion(),
        choices: props.multipleChoiceItems[i].getChoices(),
        answer: props.multipleChoiceItems[i].getAnswer()
      }
      multipleChoiceItems.push(muplitpleChoiceItemInitial)
    }

    let conceptItems = []

    for (let i = 0; i < props.conceptItems.length; i++) {
      let conceptItemsInitial = {
        question: props.conceptItems[i].getQuestion(),
        answer: props.conceptItems[i].getAnswer()
      }
      conceptItems.push(conceptItemsInitial)
    }

    const newPost = {
      title,
      description,
      isPublic,
      email: auth.currentUser.email,
      multipleChoiceItems: multipleChoiceItems,
      splitText: props.splitText,
      conceptItems: conceptItems,
      embeddedChunks: props.embeddedChunks,
      summarizedChunks: props.summarizedChunks
    };

    try {
      const savedFilesCollection = collection(db, "SavedFiles")
      await addDoc(savedFilesCollection, newPost)
      alert("Post saved successfully!")
    } catch (error) {
      console.error(error)
      alert("An error occurred while saving the post.")
    }

    setTitle("")
    setDescription("")
    setIsPublic(false)
    props.setSaving(false)
  };

  return (
    <div className="blog-post-form">
      <button className="back-button" onClick={() => props.setSaving(false)}>
        Back
      </button>
      <h1> Save </h1>
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="is-public">Make it public?</label>
        <input
          type="checkbox"
          id="is-public"
          checked={isPublic}
          onChange={handleIsPublicChange}
        />
      </div>
      <button className="post-button" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}

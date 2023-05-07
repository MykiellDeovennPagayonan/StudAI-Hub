/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../functions/firebase";
import "./History.css";

export default function History(props) {
  const [myfiles, setMyFiles] = useState([])

  const savedFilesCollection = collection(db, "SavedFiles")

  async function getMySavedFiles() {
    const data = await getDocs(savedFilesCollection)
    const savedFiles = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    const myFilesInitial = []

    for (let i = 0; i < savedFiles.length; i++) {
      if (savedFiles[i].email === auth.currentUser.email) {
        myFilesInitial.push(savedFiles[i])
      }
    }
    myFilesInitial.reverse()
    setMyFiles(myFilesInitial)
  }

  useEffect(() => {
    getMySavedFiles()
  }, [])

  return (
    <div className="history">
      <div className="history-holder">
        {myfiles.map((file) => {
          return (
            <>
              <button className="past-saved-holder" onClick={() => {props.setPageNum(0), props.setContentNum(0), props.loadNew(file)}}>
                <div className="title-holder">
                  <h2 className="title"> {file.title} </h2>
                </div>
                <div className="description-holder">
                  <p className="description"> {file.description} </p>
                </div>
              </button>
            </>
          )
        })}
      </div>
    </div>
  );
}
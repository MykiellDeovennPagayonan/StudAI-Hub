/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../functions/firebase";
import "./Community.css";

export default function Community(props) {
  const [communityfiles, setCommunityFiles] = useState([])

  const savedFilesCollection = collection(db, "SavedFiles")

  async function getCommunityFiles() {
    const data = await getDocs(savedFilesCollection)
    const savedFiles = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    const communityFilesInitial = []

    for (let i = 0; i < savedFiles.length; i++) {
      if (savedFiles[i].isPublic) {
        communityFilesInitial.push(savedFiles[i])
      }
    }
    communityFilesInitial.reverse()
    setCommunityFiles(communityFilesInitial)
  }

  useEffect(() => {
    getCommunityFiles()
  }, [])

  return (
    <div className="community">
      <div className="community-holder">
        {communityfiles.map((file) => {
          return (
            <>
              <button className="past-saved-holder" onClick={() => {props.setPageNum(0), props.setContentNum(0), props.loadNew(file)}}>
                <div className="title-holder">
                  <h2 className="title"> {file.title} </h2>
                </div>
                <div className="author-holder">
                  <p className="author"> {file.email} </p>
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
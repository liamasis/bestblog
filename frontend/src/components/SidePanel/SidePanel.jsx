import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote'
import CreateIcon from '@mui/icons-material/Create'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import GitHubIcon from '@mui/icons-material/GitHub'

export const SidePanel = () => {
  return (
    <div className="container">
      <div className="">
        <h4>Visting the best places around the world.</h4>
        <div className="">
          <div className="">
            <CreateIcon />
            <p>Write Post</p>
          </div>
          <div className="">
            <EditNoteIcon />
            <p>Edit Post</p>
          </div>
          <div className="">
            <LocationSearchingIcon />
            <p>Search</p>
          </div>
          <div className="">
            <GitHubIcon />
            <p>View Source Code</p>
          </div>
        </div>
      </div>
    </div>
  )
}

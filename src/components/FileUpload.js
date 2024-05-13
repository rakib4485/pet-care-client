// import React from 'react';
'use client'
import { Info,Trash } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Upload } from 'keep-react'

const FileUpload = ({files, setFiles}) => {
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles)
      }, [])
    
      return (
        <Upload options={{ onDrop }}>
          <Upload.Body>
            <Upload.Icon>
              <img src="/images/icon/folder.svg" alt="folder"/>
            </Upload.Icon>
            <Upload.Text>
              <p className="text-body-3 font-medium text-metal-600">Drag & Drop or Choose File to Upload</p>
              <p className="text-body-4 font-normal text-metal-400">JPG, JPEG, PNG formats, up to 50 MB.</p>
            </Upload.Text>
          </Upload.Body>
          <Upload.Footer isFileExists={files.length > 0}>
            <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
              <Info size={16} />
              Uploaded Files
            </p>
            <ul className="space-y-1">
              {files?.map((file) => (
                <li
                  key={file?.name}
                  className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600">
                  {file?.name}
                  <Trash size={16} color="red" />
                </li>
              ))}
            </ul>
          </Upload.Footer>
        </Upload>
      )
};

export default FileUpload;
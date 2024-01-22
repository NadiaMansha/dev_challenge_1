import React, { useEffect, useState } from 'react'
import './ImageUploader.css'
import icon from './assets/image.svg'
import { uploadFile } from './api/ImageUpload'
import { FaRegCheckCircle } from "react-icons/fa";
import { LinearProgress } from '@mui/material';

const ImageUploader = () => {


    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const onImageChange = async (e) => {
        setLoading(true)
        const url = await uploadFile(e.target.files[0])
        setImageUrl(url)
        setLoading(false)

    }

    const handleCopy = (link) => {
        const el = document.createElement('textarea');
        el.value = link;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    const handelDragOver = (e) => {
        e.preventDefault()
    }

    const handelDrop = async (e) => {
        
        e.preventDefault()
        setLoading(true)
        console.log(e.dataTransfer.files[0])
        const url = await uploadFile(e.dataTransfer.files[0])
        setImageUrl(url)
        setLoading(false)

    }

    return (
        <div className="image-uploader-main">
            {
                loading ? <div className="loading">
                    <p>Uploading</p>
                    <LinearProgress />

                </div> :
                    imageUrl ?
                        <div className='uploaded'>
                            <FaRegCheckCircle size={30} className="icon" />
                            <p>Uploaded Successfully!</p>
                            <img src={imageUrl} alt="image" />
                            <div className="url">
                                <p>{imageUrl.substring(0, 30)}</p>
                                <button
                                    onClick={() => handleCopy(imageUrl)}
                                >Copy Link</button>
                            </div>

                        </div> :
                        <>
                            <div

                                onDragOver={handelDragOver}
                                onDrop={handelDrop}
                                className='image-uploader-drag'>
                                <h3>Upload your image</h3>
                                <p>File should be Jpeg, Png,...</p>
                                <div className="image-uploader-drag-main">
                                    <img src={icon} alt="image" />
                                    <p

                                    >Drag and drop your image here</p>
                                </div>

                            </div>
                            <p>Or</p>
                            <div className="image-uploader-choose">

                                <>
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        <span>Choose File</span>
                                    </label>
                                    <input
                                        onChange={onImageChange}
                                        id="file-upload" type="file" />
                                </>

                            </div>
                        </>
            }


        </div>
    )
}

export default ImageUploader

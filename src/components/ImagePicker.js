import React from 'react';
import { useFilePicker } from 'react-sage'

function ImgPicker() {
    const fp = useFilePicker({});

    return (
        <div>
            <fp.HiddenFileInput
            ></fp.HiddenFileInput>
            <button onClick={() => { fp.onClick(); console.log(fp.files) }}>
                Click to upload image.
        </button>
            {
                fp.files.length > 0 &&
                <img
                    src={URL.createObjectURL(fp.files[0])}
                >
                </img>
            }
        </div >
    );
}

export default ImgPicker;
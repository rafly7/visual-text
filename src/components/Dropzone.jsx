import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Utils from "../utils/utils";

const Dropzone = (props) => {
    const { setFile } = props;
  
    const {
      acceptedFiles,
      getRootProps,
      getInputProps,
      isFocused,
      isDragActive,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      accept: {
        "image/*": [
          ".png",
          ".jpeg"
        ],
      },
      multiple: false,
      maxSize: 5 << 20,
    });
  
    useEffect(() => {
      if (acceptedFiles.length === 1) {
        setFile(acceptedFiles[0]);
      }
    }, [acceptedFiles]);
  
    return (
      <section
        style={{ margin: "20px 0 0 0", cursor: 'pointer' }}
      >
        <ContainerDropzone
          {...getRootProps({
            isFocused,
            isDragReject,
            isDragAccept,
            isDragActive,
          })}
        >
          <input {...getInputProps()} />
          {acceptedFiles.length > 0 ? (
            <>
              <p style={{ marginTop: "0", color: "black" }}>Accepted file</p>
              <em style={{ color: "black" }}>
                {acceptedFiles[0].path} -{" "}
                {Utils.formatBytes(acceptedFiles[0].size)}
              </em>
            </>
          ) : (
            <>
              <p style={{ marginTop: "0" }}>
                Drag 'n' drop some files here, or click to select files
              </p>
              <em>(Only .xlsx will be accepted)</em>
            </>
          )}
        </ContainerDropzone>
      </section>
    );
  }
  
  const getColor = (props) => {
    if (props.isDragAccept) {
      return "#00e676";
    }
    if (props.isDragReject) {
      return "#ff1744";
    }
    if (props.isFocused) {
      return "#2196f3";
    }
    return "#eeeeee";
  };
  
  const ContainerDropzone = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${(props) => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdc3c7;
    outline: none;
    transition: border 0.24s ease-in-out;
  `

export default Dropzone
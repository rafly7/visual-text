import { Button, TextField, Typography } from '@mui/material';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import styles from './App.module.css'
import Dropzone from './components/Dropzone'
import Utils from './utils/utils';


const App = () => {
  
  const [fileImage, setFileImage] = useState(null);

  const exportRef = useRef()
  const imgRef = useRef()

  const exportAsImage = async (e) => {
    e.preventDefault()
    const f = await Utils.fileToBlob(fileImage)
    const objectURL = URL.createObjectURL(f)
    /**
     * START
     */
    const text = e.target['text-embed'].value
    const genText = Array.from({length: 3000}, () => {
      return text
    }).join(' ')
    imgRef.current.innerText = `${genText}`
    const style = imgRef.current.style
    style.background = `url(${objectURL})`
    style.position = 'relative'
    style.backgroundSize = 'contain'
    style.backgroundRepeat = 'no-repeat'
    style.backgroundPosition = 'center'
    style.webkitBackgroundClip = 'text'
    style.backgroundClip = 'text'
    style.webkitTextFillColor = 'rgba(255,255,255,0)'
    style.boxSizing = 'border-box'
    style.webkitFilter = 'blur(0px)'
    style.filter = 'blur(0px)'
    style.maxWidth = 'fit-content'
    style.maxHeight = '800px'
    style.overflowX = 'hidden'
    style.fontSize = '0.76em'
    style.fontFamily = 'var(--font-family-opensans)'
    style.width = '100%'
    style.textAlign = 'justify'
    style.letterSpacing = '-1px'
    style.lineHeight = '10px'
    style.overflowY = 'hidden'
    style.zIndex = 2
    /**
     * END
     */
    // console.log(imgRef.current.style.background)
    // console.log(imgRef.current.style)
    // const canvas = html2canvas(element, {logging: true, useCORS: true, foreignObjectRendering: true, })
    // const image = (await canvas).toDataURL('image/png', 1.0)
    // downloadImage(image, `visual-text-${Date.now()}.png`);
  }

  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
    
    fakeLink.href = blob;
    
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    
    fakeLink.remove();
  };

  return (
    <div className={styles['main-container']}>
      <div className={styles['sub-container']}>
        <div className={styles['row-input-container']}>
          <div className={styles['col-input-container']}>
            <form onSubmit={exportAsImage}>
              <Typography variant='h3' className={styles['header-text']}>Visual Text</Typography>
              <TextField name='text-embed' inputProps={{ maxLength: 32 }} style={{width: '100%'}} label="Text embed image" variant="standard" />
              <Dropzone setFile={setFileImage} />
              {/* <img src={fileObjectURL} alt='visual-text' style={{width: '100px', height: '100px'}} /> */}
              {/* <Button onClick={() => exportAsImage(exportRef.current)} style={{width: '100%', marginTop: '30px'}} variant="contained">Generate</Button> */}
              <Button type='submit' style={{width: '100%', marginTop: '30px'}} variant="contained">Generate</Button>
            </form>
          </div>
        </div>
        <div className={styles['row-result-container']}>
          <div className={styles['bg-cliper']} ref={exportRef}>
            <div className={styles['all-text']} ref={imgRef}>
            The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools.		
The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools. Dozens of ships, laden with treasure, have gone to the bottom of the ocean! Over the years many adventurers have tried to find this precious booty. But these waters swarm with vicious creatures: tigersharks, hammerheads, ghost sharks, and worse! Now, it's your turn to dive...The old sea-dogs say that for nearly a century these waters have been home to mysterious storms and whirlpools
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

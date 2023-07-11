import React, { useState, useEffect } from 'react';
import { AddContainer } from './styles'

export default function WordCounterApp () {
  const [counter, setCounter] = useState('0')
  const [textArea, setTextArea] = useState()

  useEffect(() => {

    if (localStorage.savedTextInfos) {
      const getsavedTextInfos = (JSON.parse(localStorage.getItem('savedTextInfos')));
      setCounter(getsavedTextInfos.numberOfWords)
      setTextArea(getsavedTextInfos.textSaved)  
    }
    
  }, []);

  const onChangeGetText = (event) => {

    let words = (event.target.value)
    words = words.replace(/(^\s*)|(\s*$)/gi,'');
    words = words.replace(/[ ]{2,}/gi,' ');
    words = words.replace(/(\n )|(\n)|( \n)/gi,' ');

    if ((words === '') || (words === ' ')){

      setCounter('0');
      setTextArea('')
      localStorage.removeItem('savedTextInfos')

    } else {

      words = words.split(' ').length;

      setCounter(words)
      setTextArea(event.target.value) 
      
      const savedTextInfos = {
        numberOfWords: words, 
        textSaved: (event.target.value),
      }
      localStorage.setItem('savedTextInfos', JSON.stringify(savedTextInfos))
    }
  };

  return (
    <AddContainer>
      <h1>Palavras: {counter}</h1>
      <textarea 
        rows='20'
        value={textArea} 
        onChange={onChangeGetText}
        placeholder='Cole ou digite seu texto aqui'
      />
    </AddContainer>
  );
}

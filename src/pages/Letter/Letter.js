import React, {useContext} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import '../../App.css';
import { Link } from "react-router-dom";

const Letter = observer((props) => {
  const {mailConfig} = useContext(Context);
  const messageId = +window.location.href.match(/\/([1-9]{1}[0-9]{0,})/)[1];
  console.log(messageId);
  let letter = mailConfig['Custom'].find((elem) => elem.id === messageId);
  if (letter === undefined) {
    for (let elem of mailConfig.Folders){
      console.log(elem);
      console.log(mailConfig[elem]);
      letter = mailConfig[elem].find((msg) => msg.id === messageId);
      if (letter !== undefined) break;
    }
  }
  console.log(letter);
  return(
    <div className="app">
      <div className='app-letter-reading'>
        <div className="app-letter-author" style={{paddingBottom: '7px'}}>
          <b>Автор: </b>{letter.author}
        </div>
        <div className="app-letter-text" style={{paddingBottom: '7px'}}>
          {letter.text}
        </div>
        <div className="app-letter-date" style={{paddingBottom: '7px'}}>
          <b>Date: </b>{letter.date}
        </div>
      </div>
      <Link to='/'>HOME</Link>
    </div>
  )
})

export default Letter;
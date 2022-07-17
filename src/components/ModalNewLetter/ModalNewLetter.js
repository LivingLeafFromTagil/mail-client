import React, {useContext, useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const ModalNewLetter = observer((props) => {
  const {mailConfig} = useContext(Context);
  const [letterText, setLetterText] = useState('');

  return(
    <div className={mailConfig.ModalClassLetter}>
      <div className="modal-letter">
        <div className="modal-body-letter">
          <div>Напишите Ваше письмо</div>
          <textarea placeholder="Имя" value={letterText} onChange={(e) => setLetterText(e.target.value)}/>
          <div className="modal-buttons">
            <button onClick={()=>{
              const date = new Date();
              let month = date.getMonth() + 1;
              if(month < 10) month = '0'+month;
              mailConfig.setLastId();
              mailConfig.Sent.push({
                id: mailConfig.LastId,
                preview: letterText.slice(0,10),
                text: letterText,
                author: 'Я',
                date: date.getDate()+'.'+month+'.'+date.getFullYear()
              });
              mailConfig.setModalClassLetter('none');
              localStorage.setItem('lastId', mailConfig.LastId);
              localStorage.setItem('Sent', JSON.stringify(mailConfig.Sent));
            }}>
              Отправить
            </button>

            <button onClick={()=>{
              const date = new Date();
              let month = date.getMonth() + 1;
              if(month < 10) month = '0'+month;
              mailConfig.setLastId();
              mailConfig.Draft.push({
                id: mailConfig.LastId,
                preview: letterText.slice(0,10),
                text: letterText,
                author: 'Я',
                date: date.getDate()+'.'+month+'.'+date.getFullYear()
              });
              mailConfig.setModalClassLetter('none');
              localStorage.setItem('lastId', mailConfig.LastId);
              localStorage.setItem('Draft', JSON.stringify(mailConfig.Draft));}}>
                Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default ModalNewLetter;
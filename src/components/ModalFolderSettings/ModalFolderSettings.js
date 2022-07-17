import React, {useContext, useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const ModalFolderSettings = observer((props) => {
  const {mailConfig} = useContext(Context);
  const [name, setName] = useState('');

  return(
    <div className={mailConfig.ModalClass}>
      <div className="modal">
        <div className="modal-body">
          Введите имя папки:
          <input placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)}/>
          <div className="modal-buttons">
            {props.isNew && 
            (<button onClick={()=>{
              mailConfig.setModalClass('none');
              mailConfig.setFolders(name);
              localStorage.setItem('mailFolders', mailConfig.Folders);}}>
              Принять
            </button>)}
            {props.isNew === false && (
              <button onClick={()=>{
                mailConfig.setModalClass('none');
                const idx = mailConfig.Folders.indexOf(mailConfig.SelectedFolder);
                mailConfig.Folders[idx] = name;
                localStorage.setItem('mailFolders', mailConfig.Folders);}}>
                Изменить
              </button>
            )

            }

            <button onClick={()=>{
              mailConfig.setModalClass('none');}}>
                Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default ModalFolderSettings;
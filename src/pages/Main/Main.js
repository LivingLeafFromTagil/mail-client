import React, {useContext, useEffect, useState} from "react";
import logo from '../../img/logo192.png'
import { Context } from "../..";
import CurrentFolder from "../../components/CurrentFolder/CurrentFolder";
import { observer } from 'mobx-react-lite';
import '../../App.css';
import ModalFolderSettings from "../../components/ModalFolderSettings/ModalFolderSettings";
import FoldersList from "../../components/FoldersList/FoldersList";
import ModalNewLetter from "../../components/ModalNewLetter/ModalNewLetter";

const Main = observer(() => {
  const [isNew, setNew] = useState(true);

  const {mailConfig} = useContext(Context);
  console.log(mailConfig);
  return (
    <div className="app">
     <ModalFolderSettings isNew={isNew}/>
     <ModalNewLetter />
     <div className="app-header">
       <div className="app-header-logo">
        <img src={logo} alt="#logo"></img>
       </div>
       <div className="app-header-text">
        React-mail Client
       </div>
       <div className="app-header-crud">
        <button onClick={() => {
          mailConfig.setModalClassLetter('modal-wrapper-letter');
        }}>
          Новое письмо
        </button>
        <button onClick={() => {
          mailConfig.setModalClass('modal-wrapper');
          setNew(true);}}>
            Создать папку
        </button>
        {mailConfig.SelectedFolder !== 'Inbox' &&
          mailConfig.SelectedFolder !== 'Sent' &&
          mailConfig.SelectedFolder !== 'Draft' &&
          mailConfig.SelectedFolder !== 'Deleted' &&
          mailConfig.SelectedFolder !== 'Spam' &&
         (<button onClick={() => {
          mailConfig.setModalClass('modal-wrapper');
          setNew(false);}}>
            Изменить папку
        </button>)}
        {mailConfig.SelectedFolder !== 'Inbox' &&
          mailConfig.SelectedFolder !== 'Sent' &&
          mailConfig.SelectedFolder !== 'Draft' &&
          mailConfig.SelectedFolder !== 'Deleted' &&
          mailConfig.SelectedFolder !== 'Spam' && (
         <button onClick={() => {
          const idx = mailConfig.Folders.indexOf(mailConfig.SelectedFolder);
          mailConfig.Folders.splice(idx, 1);
          localStorage.setItem('mailFolders', mailConfig.Folders)
          mailConfig.setSelectedFolder('Inbox');
         }}>
            Удалить папку
          </button>)}
       </div>
     </div>
     <div className="app-main">
       <div className="app-main-folders">
         <FoldersList />
       </div>
       <CurrentFolder />
     </div>
     <div className="app-footer">
      <a href="https://github.com/LivingLeafFromTagil">GitHub</a>
      <a href="https://vk.com/romichhhh">VK</a>
     </div>
    </div>
   );
})

export default Main;
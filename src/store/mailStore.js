import { makeAutoObservable } from "mobx";

const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime minus laboriosam neque quod voluptas sint, expedita quas labore esse maiores beatae tempora vero fugit explicabo laudantium cupiditate reiciendis architecto commodi.'

export default class mailStore{
  constructor(){
    this._lastId = 120;
    this._modalClassLetter = 'none'
    this._modalClass = 'none';
    this._selectedFolder = 'Inbox';
    this._folders = localStorage.getItem('mailFolders').split(',') ?? ['Inbox', 'Sent', 'Draft', 'Deleted', 'Spam'];
    this._isCustom = false;
    this._inbox = [
      {
        id: 35,
        author: 'Univer',
        preview: 'Обратите внимание!',
        text: `Обратите внимание! ${lorem}`,
        date: '26.12.2021'
      },
      {
        id: 47,
        author: 'Green Market',
        preview: 'Скидки!',
        text: `Скидки для всех! Нужно лишь ${lorem}`,
        date: '01.03.2022'
      }
    ].reverse();
    this._sent = JSON.parse(localStorage.getItem('Sent')) ?? [
      {
        id: 77,
        author: 'Я',
        preview: 'Тест',
        text: `Прошу, не забудьте проверить тест! ${lorem}`,
        date: '15.06.2022'
      },
    ].reverse();
    this._draft = JSON.parse(localStorage.getItem('Draft')) ?? [
      {
        id: 9,
        author: 'Я',
        preview: '',
        text: 'Здесь хотелось бы сказ',
        date: '22.10.2021'
      }
    ].reverse();
    this._deleted = [
      {
        id: 1,
        author: 'Regbuy',
        preview: 'Задолженность',
        text: 'Ваш долг больше 10000 рублей! Просьба, погасить до конца года',
        date: '09.08.2021'
      },
      {
        id: 5,
        author: 'Regbuy',
        preview: 'Задолженность',
        text: 'Ваш долг больше 10000 рублей! Просьба, погасить до конца года',
        date: '09.09.2021'
      },
      {
        id: 8,
        author: 'Regbuy',
        preview: 'Задолженность',
        text: 'Ваш долг больше 10000 рублей! Просьба, погасить до конца года',
        date: '09.10.2021'
      }
    ].reverse();
    this._spam = [
      {
        id: 15,
        author: 'Kupi-slona',
        preview: 'Покупка',
        text: 'Купите слона',
        date: '16.11.2021'
      },
      {
        id: 16,
        author: 'Kupi-slona',
        preview: 'Покупка',
        text: 'Купите слона',
        date: '17.11.2021'
      },
      {
        id: 17,
        author: 'Kupi-slona',
        preview: 'Покупка',
        text: 'Купите слона',
        date: '18.11.2021'
      },
      {
        id: 18,
        author: 'Kupi-slona',
        preview: 'Покупка',
        text: 'Купите слона',
        date: '19.11.2021'
      },
    ].reverse();
    this._custom = [
      {
        id: 120,
        author: 'Custom',
        preview: 'Message from custom Folder',
        text: 'Message from custom Folder for test',
        date: '15.07.2022'
      }
    ]
    makeAutoObservable(this);
  }

  setLastId(){
    this._lastId++;
  }

  setModalClass(name) {
    this._modalClass = name;
  }

  setModalClassLetter(name) {
    this._modalClassLetter = name;
  }

  setFolders(folder) {
    this._folders = [...this._folders, folder];
  }

  setSelectedFolder(folderName) {
    this._selectedFolder = folderName;
  }

  setIsCustom(boolean) {
    this._isCustom = boolean;
  }

  setInbox(messages) {
    this._inbox = [...messages];
  }

  setSent(messages) {
    this._sent = [...messages];
  }

  setDraft(messages) {
    this._draft = [...messages];
  }

  setDeleted(messages) {
    this._deleted = [...messages];
  }

  setSpam(messages) {
    this._spam = [...messages];
  }

  get LastId() {
    return this._lastId;
  }

  get ModalClass() {
    return this._modalClass;
  }

  get ModalClassLetter() {
    return this._modalClassLetter;
  }

  get Folders() {
    return this._folders;
  }

  get SelectedFolder() {
    return this._selectedFolder;
  }

  get IsCustom() {
    return this._isCustom;
  }

  get Custom() {
    return this._custom;
  }

  get Inbox() {
    return this._inbox;
  }

  get Sent() {
    return this._sent;
  }

  get Draft() {
    return this._draft;
  }

  get Deleted() {
    return this._deleted;
  }

  get Spam() {
    return this._spam;
  }
}
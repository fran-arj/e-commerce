import { Fragment, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import ItemList from './ItemList';
const dataDB = [
    {
      ID: '16960',
      title: 'Learn Programming',
      author: 'Antti Salonen',
      content:
        'This book is aimed at readers who are interested in software development but have very little to no prior experience.\r\n\r\nThe book doesn’t have any new information compared to what you can find online or in other books; it has two purposes:\r\n\r\n<ol>\r\n<li>It includes what I think is important for software development from a large variety of topics, saving the reader from the dilemma “what should I learn”</li>\r\n<li>It collates relevant information from lots of sources in one book, saving the reader from going through several separate web sites and books</li>\r\n</ol>\r\n\r\nIt aims to contain an overview of almost everything that I think is important for software developers. It doesn’t contain everything; but it should contain enough for the reader to understand software development, and to be able to read about and understand any topic in further detail as needed.\r\n\r\nThe book focuses on teaching the core principles around software development. It uses several technologies to this goal (e.g. C, Python, JavaScript, HTML, etc.) but is not a book about the technologies themselves. The reader will learn the basics (or in some cases more) of various technologies along the way, but the focus is on building a foundation for software development.',
      content_short:
        'This book is aimed at readers who are interested in software development but have very little to no prior experience.\r\n\r\nThe book doesn’t have any new information compared to what you ...',
      publisher: 'Autoedición',
      publisher_date: '2018',
      pages: '465',
      language: 'english',
      url_details: 'https://www.etnassoft.com/biblioteca/learn-programming/',
      url_download: 'https://openlibra.com/book/learn-programming',
      cover:
        'https://olcovers2.blob.core.windows.net/coverswp/2018/10/Learn-Programming-Antti-Salonen-OpenLibra-323x461.png',
      thumbnail:
        'https://olcovers2.blob.core.windows.net/coverswp/2018/10/Learn-Programming-Antti-Salonen-OpenLibra-110x153.png',
      num_comments: '0',
      categories: [
        {
          category_id: 220,
          name: 'Programación',
          nicename: 'libros_programacion',
        },
      ],
      tags: [
        {
          tag_id: 277,
          name: 'bases de datos',
          nicename: 'bases-de-datos',
        },
        {
          tag_id: 2999,
          name: 'C',
          nicename: 'c',
        },
        {
          tag_id: 1076,
          name: 'Cplusplus',
          nicename: 'cplusplus',
        },
        {
          tag_id: 2996,
          name: 'HTML',
          nicename: 'html',
        },
        {
          tag_id: 2986,
          name: 'Javascript',
          nicename: 'javascript',
        },
        {
          tag_id: 32,
          name: 'programación',
          nicename: 'programacion',
        },
        {
          tag_id: 760,
          name: 'programación web',
          nicename: 'programacion-web',
        },
        {
          tag_id: 240,
          name: 'python',
          nicename: 'python',
        },
        {
          tag_id: 71,
          name: 'software',
          nicename: 'software',
        },
        {
          tag_id: 374,
          name: 'sql',
          nicename: 'sql',
        },
        {
          tag_id: 381,
          name: 'UNIX',
          nicename: 'unix',
        },
      ],
    },
    {
      ID: '16872',
      title: 'Kotlin Notes for Professionals',
      author: 'Varios',
      content:
        'This Kotlin Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow.\r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
      content_short:
        'This Kotlin Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow.\r\n\r\nText content is released under Creative Commons BY-SA, ...',
      publisher: 'GoalKicker.com',
      publisher_date: '2018',
      pages: '94',
      language: 'english',
      url_details:
        'https://www.etnassoft.com/biblioteca/kotlin-notes-for-professionals/',
      url_download: 'https://openlibra.com/book/kotlin-notes-for-professionals',
      cover:
        'https://olcovers2.blob.core.windows.net/coverswp/2018/05/KotlinNotesForProfessionals-OpenLibra-326x461.png',
      thumbnail:
        'https://olcovers2.blob.core.windows.net/coverswp/2018/05/KotlinNotesForProfessionals-OpenLibra-110x153.png',
      num_comments: '0',
      categories: [
        {
          category_id: 224,
          name: 'Otros Lenguajes',
          nicename: 'programacion_otros_lenguajes',
        },
        {
          category_id: 220,
          name: 'Programación',
          nicename: 'libros_programacion',
        },
      ],
      tags: [
        {
          tag_id: 448,
          name: 'framework',
          nicename: 'framework',
        },
        {
          tag_id: 97,
          name: 'java',
          nicename: 'java',
        },
        {
          tag_id: 2986,
          name: 'Javascript',
          nicename: 'javascript',
        },
        {
          tag_id: 3361,
          name: 'Kotlin',
          nicename: 'kotlin',
        },
        {
          tag_id: 32,
          name: 'programación',
          nicename: 'programacion',
        },
      ],
    },
  ];
  function obtenerDatos(){
      return new Promise( (resolve,reject ) => {
          resolve(dataDB)
      })
  }
  //https://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]&order=newest

const ItemListContainer = (props)=>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        let requestDatos= obtenerDatos();
        requestDatos.then((datosResolve)=>{
            setItems(datosResolve)
        }).catch((errorReject) => {
            console.log('error', errorReject);
        }).finally(()=>{console.log('finally');})
    },[])
    return (
    <Fragment>
    <Paper elevation={3}>{props.titulo}</Paper>
    <ItemList items={items} />
    </Fragment>)
}
export default ItemListContainer;



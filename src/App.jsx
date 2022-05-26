import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import BoshSahifa from './companents/BoshSahifa';
import Object from './Object'
import Kitoblar from './companents/Kitoblar';
import UserItems from './companents/UserItems';
import BookPag from './companents/BookPag';
import './App.scss';
import SiginUp from './companents/Main/SiginUp/SiginUp';
import SiginIn from './companents/Main/SiginIn/SiginIn';
import ProfilPages from './companents/ProfilPages';

function App() {
  const [newCategorArr, setNewCategorArr] = useState([])
  const [newBookArr, setNewBookArr] = useState([])
  const [navbarItem, setNavbarItem] = useState([
    {
      id: 1,
      name: 'Bosh sahifa',
      act: true,
    },
    {
      id: 2,
      name: 'Nasr',
      act: false,
    },
    {
      id: 3,
      name: 'Kitoblar',
      act: false,
    },
    {
      id: 4,
      name: 'Maqolalar',
      act: false,
    },
    {
      id: 5,
      name: 'Forum',
      act: false,
    },
  ])
  const [navCount, setNavCount] = useState(1)

  const [saveObj, setSaveObj] = useState([{
    id: "1",
    name: "Pushkin",
    lastName: "Aleksandr",
    born: 1799,
    bornDate: 5,
    bornMonth: "Aug",
    died: 1837,
    diedDate: 29,
    diedMonth: "января",
    books: 34,
    audio: 13,
    genre: "jahon",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kiprensky_Pushkin.jpg/270px-Kiprensky_Pushkin.jpg",
    desc: `Алекса́ндр Серге́евич Пу́шкин (26 мая [6 июня] 1799, Москва — 29 января [10 февраля] 1837, Санкт-Петербург) — русский поэт, драматург и прозаик, заложивший основы русского реалистического направления[2], литературный критик[3] и теоретик литературы, историк[3], публицист, журналист[3]; один из самых авторитетных литературных деятелей первой трети XIX века.

    Ещё при жизни Пушкина сложилась его репутация величайшего национального русского поэта[4][5].Пушкин рассматривается как основоположник современного русского литературного языка[~2].`,
    jobs: "Ещё при жизни Пушкина сложилась его репутация величайшего национального русского поэта[4][5]. Пушкин рассматривается как основоположник современного русского литературного языка[~ 2].",
    location: "Москва, Российская империя",
    bookObj: [
      {
        bookId: "userId1_bookId1",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/0e01938fc48a2cfb5f2217fbfb00722d2021060113263255378BqpjWn2fpQ.jpg.webp",
        bookName: "All Pushkin for children",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookSenario: "Tarixiy",
        published: 2020,
        bookPage: 288,
        nashriyot: "Росмэн",
        bookInfo: `
        В этой книге собраны произведения А.С. Пушкина, которые уже на протяжении полутора столетий с удовольствием читают и слушают дети в каждой семье.`,

        bookInfoTwo: `
        В этой книге собраны произведения А.С. Пушкина, которые уже на протяжении полутора столетий с удовольствием читают и слушают дети в каждой семье. Это прекрасные пушкинские сказки - "Сказка о золотом петушке", "Сказка о мёртвой царевне и о семи богатырях", "Сказка о рыбаке и рыбке", "Сказка о царе Салтане", "Сказка о попе и о работнике его Балде", баллада "Песнь о вещем Олеге", поэма "Руслан и Людмила", а также стихи. Книга подойдет как для первого знакомства с творчеством поэта, так и для подготовки к школьным урокам литературы. Рисунки мастеров книжной иллюстрации - Е. Володькиной, В. Гальдяева, В. Коркина, А. Лебедева, В. Ненова.`,
        bookPrice: "109 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "userId1_bookId2",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/9f61408e3afb633e50cdf1b20de6f4662021052016142340507slCvoPjjCc.jpg.webp",
        bookName: "Eugene Onegin",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 224,
        published: 2021,
        bookSenario: "Tarixiy",
        nashriyot: "Эксмо",
        bookInfo: `
        Роман в стихах «Евгений Онегин» - «энциклопедия русской жизни» и «самое задушевное произведение Пушкина, самое любимое дитя его фантазии, и можно указать слишком на немногие творения, в которых личность поэта отразилась бы с такою полнотою, светло и ясно, как отразилась в «Онегине» личность Пушкина», как писал В.Г. Белинский.`,

        bookInfoTwo: `
        Роман в стихах «Евгений Онегин» - «энциклопедия русской жизни» и «самое задушевное произведение Пушкина, самое любимое дитя его фантазии, и можно указать слишком на немногие творения, в которых личность поэта отразилась бы с такою полнотою, светло и ясно, как отразилась в «Онегине» личность Пушкина», как писал В.Г. Белинский. Kоторых личность поэта отразилась бы с такою полнотою, светло и ясно, как отразилась в «Онегине» личность Пушкина», как писал В.Г. Белинский.
        `,
        bookPrice: "59 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "userId1_bookId3",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/d9ff90f4000eacd3a6c9cb27f78994cf2022012410552470918VvoUBVbXKv.jpg.webp",
        bookName: "Eugene Onegin",
        bookRating: 5,
        bookGenre: "jahon",
        bookPage: 640,
        published: 2001,
        bookSenario: "Tarixiy",
        nashriyot: "Азбука",
        bookInfo: `
        «Я теперь пишу не роман, а роман в стихах — дьявольская разница…» Занимательный, легкий, основанный на любовной истории, переданной в манере доверительной беседы автора с читателем — и вместе с тем полный неразрешимых парадоксов и загадок, пушкинский роман привлекает новые и новые поколения читателей.`,

        bookInfoTwo: `
        «Евгений Онегин» — самое известное и самое значительное произведение А. С. Пушкина, вершина русской поэзии и предмет многочисленных исследований. Пушкин начал роман в мае 1823 года, а закончил только осенью 1831 года, когда было написано «Письмо Онегина к Татьяне». Осенью 1823 года поэт сообщал друзьям: «Я теперь пишу не роман, а роман в стихах — дьявольская разница…» Занимательный, легкий, основанный на любовной истории, переданной в манере доверительной беседы автора с читателем — и вместе с тем полный неразрешимых парадоксов и загадок, пушкинский роман привлекает новые и новые поколения читателей. В настоящее издание включен комментарий к роману известного филолога Ю. М. Лотмана. Ученый показывает внутренне сложную, полную противоречий структуру романа «Евгений Онегин», скрывающуюся за внешней легкостью и понятностью пушкинских строк.
        `,
        bookPrice: "129 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      },
      {
        bookId: "userId1_bookId4",
        bookImg: "https://assets.asaxiy.uz/product/items/desktop/5e15c2858d092.jpg.webp",
        bookName: "Eugene Onegin (lotin)",
        bookRating: 0.1,
        bookGenre: "jahon",
        bookPage: 224,
        published: 2019,
        bookSenario: "Tarixiy",
        nashriyot: "Ёшлар нашриёт уйи",
        bookInfo: `
        Шоир баёнчи эмас, "кўрсатувчи" ҳолатини егаллайди - рус ҳаёти манзаралари суратдагидек кўз ўнгингизда жонланади. Айни пайтда унда даврнинг ўткир ижтимоий-ахлоқий муаммолари акс этади.`,
        bookInfoTwo: `

        Пушкин "Евгений Онегин" шеърий романида ёш замондошларининг умумлашма образини яратган. Шоир тасвирда воқеликни акс эттиришнинг янги, мураккаб усулларига мурожаат қилади. Шоир баёнчи эмас, "кўрсатувчи" ҳолатини егаллайди - рус ҳаёти манзаралари суратдагидек кўз ўнгингизда жонланади. Айни пайтда унда даврнинг ўткир ижтимоий-ахлоқий муаммолари акс этади. Шоир баёнчи эмас, "кўрсатувчи" ҳолатини егаллайди - рус ҳаёти манзаралари суратдагидек кўз ўнгингизда жонланади. Айни пайтда унда даврнинг ўткир ижтимоий-ахлоқий муаммолари акс этади.
        `,
        bookPrice: "19 000 сум",
        audioTime: "6:23 soat",
        electron: "pdf, epub"
      }
    ]
  },])

  useEffect(() => {
    setNewCategorArr(Object)
    setNewBookArr(Object)
  }, []);

  const navbarFunc = (e) => {
    let num = Math.floor(e.target.id)

    setNavbarItem(
      navbarItem.map((itm, i) => {
        if (num === itm.id) {
          setNavCount(itm.id)
          return {
            ...itm,
            act: true,
          }
        }
        return {
          ...itm,
          act: false
        }
      }))
  }

  return (
    <>
      {/* <SiginUp /> */}
      <Routes>
        <Route path='/' element={<BoshSahifa
          object={Object}
          newCategorArr={newCategorArr}
          setNewCategorArr={setNewCategorArr}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc}
        />}
        />
        <Route path='/Kitoblar' element={<Kitoblar
          object={Object}
          newBookArr={newBookArr}
          newCategorArr={newCategorArr}
          setNewBookArr={setNewBookArr}
          setNewCategorArr={setNewCategorArr}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc}
        />}
        />
        <Route path='/UserCardPages/:id' element={<UserItems
          navbarItem={navbarItem}
          navbarFunc={navbarFunc} />}
        />
        <Route path='/BooksPages/:id' element={<BookPag
          navbarItem={navbarItem}
          navbarFunc={navbarFunc} />}
        />
        <Route path='/Forum' element={<SiginUp
          saveObj={saveObj}
          setSaveObj={setSaveObj} />} />
        <Route path='/SiginIn' element={<SiginIn />} />
        <Route path='/SiginUp' element={<SiginUp
          saveObj={saveObj}
          setSaveObj={setSaveObj}
        />} />
        <Route path='/Profile' element={<ProfilPages
          saveObj={saveObj}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc}
          object={Object}
          setNewCategorArr={setNewCategorArr}
          newCategorArr={newCategorArr}
        />} />
      </Routes>
    </>
  );
}

export default App;

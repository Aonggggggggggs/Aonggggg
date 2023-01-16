import * as react from 'react';

const App = () => {
  const storise =
  [
    {
      title: 'react',
      url: 'https://readux.js.org',
      author: ('Dan Abramov', 'Andrew Clak'),
      num_comments: 2,
      point: 5,
      subjectid: 1
    },

    {
      title: 'readux',
      url: 'https://readux.js.org',
      author: 'Jordan walk',
      num_comments: 2,
      point: 5,
      subjectid: 1
    }
];
  return (
    <div>
      <h1> HAcker Story</h1>
      <Search />
      <hr />
      <List list={storise} />
    </div>
  )

}

const Search = () => {
  const handleChange = (event) => {
    console.log(event)
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">search </label>
      <input type="text" id='search' onChange={handleChange} />
    </div>
  )
}


const List = (props) => (
  <ul>
    {props.list.map(
      (item) => <Item key={item.objectID} item={item} />)
    }
  </ul>
)
const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title} </a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.point}</span>
  </li>

)
export default App

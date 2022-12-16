import './App.css';

function App() {
  return (
    <div id="container">
      <Header />
      <Nav />
      <div id="content">
        <Main />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

function Header()
{
  return(
    <div id="header">
      <h1>Header Component</h1>
    </div>
  );
}

function Nav()
{
  return(
    <div id="nav">
      <h1>Nav Component</h1>
    </div>
  );
}

function Main()
{
  return(
    <div id="main">
      <h1>Main Component</h1>
    </div>
  );
}

function Sidebar()
{
  return(
    <div id="sidebar">
      <h1>Sidebar Component</h1>
    </div>
  );
}

function Footer()
{
  return(
    <div id="footer">
      <h1>Footer Component</h1>
    </div>
  );
}

export default App;



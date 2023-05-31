import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="/carrot_1f955.png" className="logo" alt="An carrot vector art." />
        <p>
          Morkovka <span>Web</span> Site
        </p>
        <p className="small">
          Welcome to the <span className="code">Morkovka</span>'s website!

          Here you can download our stuffs (not updates daily) and see help for our tools! (e.t.c, phonetools)
        </p>
        <p>
          <a
            className="link"
            href="https://github.com/morkovka-org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <img src='/under.png' />
      </header>
    </div>
  );
}

export default App;

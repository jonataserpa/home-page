import AccountMenu from './menu/page'
import './style.css'

export default function Home() {
  return (
    <div className="container">
      <header>
        <nav>
          <AccountMenu></AccountMenu>
        </nav>
      </header>
      <div className="sidebar">
        <nav>
          <p>Teste</p>
          <p>Teste</p>
        </nav>
      </div>
      <main>
        <p>Texto central</p>
      </main>
      <footer>
        <p>Footer</p>
        {/* 
          <div className="corporate-info">
          <div className="signpost">
            <div className="board">
              <span className="text">WEB DEVELOP</span>
            </div>
          </div>
        </div>
        */}
      </footer>
    </div>
  )
}

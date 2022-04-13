import './css/KeeperApp.css';
import notes from './notes';
import Header from './Header'; 
import Note from './Note'; 
import Footer from './Footer';

function KeeperApp() {
  return (
    <div>  
      <Header />
      {notes.map(createNoteItem)}
      <Footer />
    </div>  
  )}

function createNoteItem(note) {
  return (
    <Note
      key={note.key}
      title={note.title}
      content={note.content}
    />
  )
}

export default KeeperApp;

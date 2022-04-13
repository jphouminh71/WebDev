import './css/Emojipedia.css';
import emojipedia from './emojipedia';

import Entry from './Entry';

function EmojipediaApp() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntryItem)}
      </dl>
    </div>
  )}

  function createEntryItem(entry) {
    return (
      <Entry
        key={entry.id}
        emoji={entry.emoji}
        name={entry.name}
        meaning={entry.meaning}
      />
    )
  }

export default EmojipediaApp;

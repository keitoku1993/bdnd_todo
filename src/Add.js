import React, { useState } from 'react';

const Add = ({ items, setItems }) => {
  const [addInput, setAddInput] = useState('');
  const [ids, addIds] = useState('0');

  const handleKeyPress = (e) => {
    if(e.charCode === 13) {
      const cloneItems = Array.from(items);

      setItems([
        ...cloneItems,
        {
          id: ids,
          content: addInput
        }
      ])

      const nextId = (ids+1).toString();

      setAddInput('');
      addIds(nextId);
    }
  }

  return(
    <div style={{margin: '10px'}}>
      <div>react-beautiful-dnd</div>
      <input type="text" value={addInput} onChange={e => setAddInput(e.target.value)} onKeyPress={e => handleKeyPress(e)} />
    </div>
  )
}

export default Add;
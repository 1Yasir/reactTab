import React from 'react';
import TabComponent from './tab/TabComponent';

function App() {
  const tabs = [
    {label :"Html", content :"Hyper text Markupp language"},
    {label :"css", content :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam corrupti facilis quasi quae quia tempore minus? Velit, inventore! Esse, consectetur exercitationem illum animi asperiores aliquid culpa dicta quia ad." },
    {label :"js", content :"programming language"},
    {label :"node js", content :"run time"},
  ]
  return (
    <div>
      <TabComponent tabs = {tabs}/>
    </div>
  )
}

export default App
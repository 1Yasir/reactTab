import React, { useState } from 'react'

function TabComponent(props) {
    const [activetab, setActiveTab] = useState(0);

    function handelClick(i) {
        setActiveTab(i);
    }
    const { tabs } = props;
    return (
        <div>
            {
                tabs.map((tab, i) => (
                    <button
                        onClick={() => handelClick(i)}
                        key={i}
                    >
                        {tab.label}
                    </button>
                ))
            }
            {
                tabs.map((tab, i) => (

                  activetab === i && <p>{tab.content}</p>

                ))
            }
        </div>
    )
}



export default TabComponent
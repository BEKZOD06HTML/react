import React, { useState } from 'react';
import "./mid.css";
import ToolboxCard from './card/card'
function Mid() {
    const initialTools = [
        { image: './assets/img/figma.svg', title: 'Figma', Text: 'FREE' },
        { image: './assets/icon/olmoz.svg', title: 'Sketch', Text: 'Trial & Paid' },
        { image: './assets/icon/vs.svg', title: 'Visual Studio', Text: 'FREE' },
        { image: './assets/icon/notion.svg', title: 'Notion', Text: 'FREE & Paid' },
        { image: './assets/icon/chatgpt.svg', title: 'Slack', Text: 'FREE & Paid' },
        { image: './assets/icon/in.svg', title: 'Inviton', Text: 'Trial & Paid' },
    ]

    const [tools, setTools] = useState(initialTools);
    const [toolbar, boolbar] = useState(false);

    const handleToggle = () => {
        if (toolbar) {
            setTools(initialTools);
        }
        else {
            setTools(toola => [...toola, ...initialTools]);
        }
        boolbar(!toolbar);
    }
    return (
        
        <div className="mid-container">
            <div className='text'>
                <h2>Most Popular Tools</h2>
                <p>Tools for the best Designers and Developers
                </p>
                <p>most popularly used in the world</p>
            </div>
            <div>

                <div className='pag1'>

                    {
                        tools.map((tool, index) => (
                        <ToolboxCard
                        key={index}
                        image={tool.image}
                        title={tool.title}
                        text={tool.Text}
                        />
))
                    }               
                </div>
                
                <div className='btnc'>    <button className='btn1'>Load more</button></div>
            </div>
        </div>
    );

}

export default Mid;
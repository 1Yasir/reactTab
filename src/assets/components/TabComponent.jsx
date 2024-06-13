import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import { Col, Row } from 'react-bootstrap';

function TabComponent(props) {
    const [activeTab, setActiveTab] = useState(0);
    const { tabs } = props;

    function handleClick(i) {
        setActiveTab(i);
    }


    return (
        <Container className='py-5'>
            <Row>
                <Col>
                    <div className='text-center mb-5'>
                        {tabs.map((tab, i) => (
                            <Button
                                onClick={() => handleClick(i)}
                                key={i}
                                variant="contained"
                                className={`me-3 mb-3 ${activeTab === i ? "bg-success" : ""}`}
                            >
                                {tab.title}
                            </Button>
                        ))}
                    </div>

                    {tabs.map((tab, i) => (


                        activeTab === i && (

                            <div dangerouslySetInnerHTML={{ __html: tab.content }} key={i} />


                        )
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default TabComponent;

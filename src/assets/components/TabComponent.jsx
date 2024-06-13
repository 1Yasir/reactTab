import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import { Col, Row } from 'react-bootstrap';

function TabComponent(props) {
    const [activeTab, setActiveTab] = useState(0);
    const { tabs } = props;
    const [scroll, setScroll] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScroll(window.scrollY);
            } else {
                setScroll(0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleClick(i) {
        setActiveTab(i);
    }



    const activeTabContent = tabs.find((tab, i) => activeTab === i);


    return (
        <Container className='py-5'>
            <Row>
                <Col>
                    <div className={`text-center tab-button mb-5 ${scroll > 5 ? 'sticky' : ''}`}>
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

                    {activeTabContent && (
                        <div dangerouslySetInnerHTML={{ __html: activeTabContent.content }} />
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default TabComponent;

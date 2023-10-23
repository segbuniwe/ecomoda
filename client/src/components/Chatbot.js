import React from 'react';
import Layout from './Layout';

function Chatbot() {
    return (
        <Layout>
            <div>
                <iframe
                    title="Chatbot"
                    src="http://localhost:8000"
                    width="400"
                    height="600"
                ></iframe>
            </div>
        </Layout>
    );
}

export default Chatbot;

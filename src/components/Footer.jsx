import React from 'react';

const footerStyle = {
    footer: {
        backgroundColor: '#282c34',
        padding: '1rem',
        textAlign: 'center',
        color: 'white',
        left: '0',
        bottom: '0',
        width: '100%',
    },
};

const Footer = () => {
    return (
        <footer style={footerStyle.footer}>
            <p>© 2023 Jonafiction. All rights reserved.</p>
        </footer>
    );
};


export default Footer;
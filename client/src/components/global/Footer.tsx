import React from 'react';

function Footer() {
    return (
        <div className="text-center bg-light py-4">
            <h6> Anton Lebedev </h6>
            <a href="https://github.com/Anton7p"
               className="mb-2 d-block text-info"
               target="_blank"
               rel="noreferrer"
            >
                https://github.com/Anton7p
            </a>
            <p>Copyright &copy; 2021</p>
        </div>
    );
}

export default Footer;
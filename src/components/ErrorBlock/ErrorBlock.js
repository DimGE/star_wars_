import React from 'react';
import './ErrorBlock.css'
import death from'./lord.png'

const ErrorBlock = () => {
    return (
        <div className='error-block'>
            <img className='error-block_img' src={death} alt="death planet"/>
            <div className='error-block_description'>
                <div className="error-block_title">БООМ!</div>
                <div className="error-block_text">Что-то пошло не так :( </div>
                <div className="error-block_text">Не переживайте, армия дройдов уже выехала на место ЧП</div>
            </div>

        </div>
    );
};

export default ErrorBlock;
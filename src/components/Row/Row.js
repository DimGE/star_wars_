import React from 'react';

const Row = ({left,right}) => {
    return (
        <div>
            <div className="row">
                <div className=" col offset-2 col-md-4 offset-lg-0">
                    {left}
                </div>
                <div className=" col col-md-8 col-lg-7 offset-md-1">
                    {right}
                </div>
            </div>
        </div>
    );
};

export default Row;
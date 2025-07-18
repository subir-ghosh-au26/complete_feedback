import React from 'react';

const StarRating = ({ rating, onRating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                index += 1;
                return (
                    <span
                        key={index}
                        className={index <= rating ? "star on" : "star off"}
                        onClick={() => onRating(index)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
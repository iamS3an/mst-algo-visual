import React from 'react';
import '../styles/PlaybackControls.css';

const PlaybackControls = ({ isPlaying, sliderValue, maxSliderValue, handlePlayPause, handleSliderChange }) => {
    return (
        <div className="controls-container">
            <button
                onClick={handlePlayPause}
                className={`play-button ${isPlaying ? 'playing' : ''}`}
            >
                {isPlaying ? '⏸' : '▶'}
            </button>
            <div className="slider-container">
                <span className="time-display">{sliderValue}</span>
                <input
                    type="range"
                    min="0"
                    max={maxSliderValue}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="progress-slider"
                    style={{
                        background: `linear-gradient(to right, #007BFF 0%, #007BFF ${sliderValue / maxSliderValue * 100}%, #ddd ${sliderValue / maxSliderValue * 100}%, #ddd 100%)`
                    }}
                />
                <span className="time-display">{maxSliderValue}</span>
            </div>
        </div>
    );
};

export default PlaybackControls;

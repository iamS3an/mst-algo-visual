import React from 'react';
import '../styles/PlaybackControls.css';

const PlaybackControls = ({ isPlaying, sliderValue, maxSliderValue, handlePlayPause, handleSliderChange }) => {
    return (
        <div className="controls-container">
            <button
                onClick={handlePlayPause}
                className={`play-button ${isPlaying ? 'playing' : ''}`}
                onMouseEnter={(e) => {
                    e.target.style.color = isPlaying ? '#E64A19' : '#388E3C';
                    e.target.style.borderColor = isPlaying ? '#E64A19' : '#388E3C';
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = isPlaying ? '#FF5722' : '#4CAF50';
                    e.target.style.borderColor = isPlaying ? '#FF5722' : '#4CAF50';
                }}
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
                        background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${sliderValue / maxSliderValue * 100}%, #ddd ${sliderValue / maxSliderValue * 100}%, #ddd 100%)`
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = `linear-gradient(to right, #388E3C 0%, #388E3C ${sliderValue / maxSliderValue * 100}%, #bbb ${sliderValue / maxSliderValue * 100}%, #bbb 100%)`;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${sliderValue / maxSliderValue * 100}%, #ddd ${sliderValue / maxSliderValue * 100}%, #ddd 100%)`;
                    }}
                />
                <span className="time-display">{maxSliderValue}</span>
            </div>
        </div>
    );
};

export default PlaybackControls;

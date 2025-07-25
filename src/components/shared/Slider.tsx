import './slider.css';

type SliderProps = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;

}

export const Slider = ({
    value,
    onChange,
    min = 5,
    max = 20,
    step = 1,
    disabled = false
}: SliderProps) =>
    <div className="slider-container">
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="question-slider"
            disabled={disabled}
        />
        <div className="slider-labels">
            <span>{min}</span>
            <span>{max}</span>
        </div>
    </div>

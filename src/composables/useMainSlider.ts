interface MainSliderSlide {
    id: number,
    src: string,
    alt: string,
}

export default function useMainSlider(): Array<MainSliderSlide> {
    return [
        {
            id: 1,
            src: require('@/assets/images/main-slider/main-slider-1.png'),
            alt: '',
        },
        {
            id: 2,
            src: require('@/assets/images/main-slider/main-slider-2.png'),
            alt: '',
        },
        {
            id: 3,
            src: require('@/assets/images/main-slider/main-slider-3.png'),
            alt: '',
        },
    ];
}

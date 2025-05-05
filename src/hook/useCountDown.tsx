import { useState, useEffect, useRef } from "react";

const useCountdown = (targetDate: string) => {
    const [timeDays, setTimeDays] = useState('00');
    const [timeHours, setTimeHours] = useState('00');
    const [timeMinutes, setTimeMinutes] = useState('00');
    const [timeSeconds, setTimeSeconds] = useState('00');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const interval: any = useRef(null);

    useEffect(() => {
        const countDownDate = new Date(targetDate).getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeDays(String(days).padStart(2, '0'));
                setTimeHours(String(hours).padStart(2, '0'));
                setTimeMinutes(String(minutes).padStart(2, '0'));
                setTimeSeconds(String(seconds).padStart(2, '0'));
            }
        }, 1000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, [targetDate]);

    return { timeDays, timeHours, timeMinutes, timeSeconds };
}

export default useCountdown;
import { useState, useEffect, useRef } from "react";

interface TimeLeft {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
    const countDownDate = new Date(targetDate).getTime();
    const now = Date.now();
    const distance = countDownDate - now;

    if (distance <= 0) {
        return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
    };
};

const useCountdown = (targetDate: string) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Validar si la fecha es válida
        if (isNaN(new Date(targetDate).getTime())) {
            console.error("Invalid targetDate provided to useCountdown.");
            return;
        }

        const updateCountdown = () => {
            const updatedTime = calculateTimeLeft(targetDate);
            setTimeLeft(updatedTime);

            if (
                updatedTime.days === "00" &&
                updatedTime.hours === "00" &&
                updatedTime.minutes === "00" &&
                updatedTime.seconds === "00"
            ) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            }
        };

        intervalRef.current = setInterval(updateCountdown, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [targetDate]);

    return timeLeft;
};

export default useCountdown;

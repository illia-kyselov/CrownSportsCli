export const formatDate = (date) => {
    const d = date instanceof Date ? date : new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
};

export const formatTime = (time) => {
    const t = time instanceof Date ? time : new Date(time);
    let hours = t.getHours();
    let minutes = t.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;
};

export const formatDateSection = (date) => {
    const d = date instanceof Date ? date : new Date(date);
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const month = monthNames[d.getMonth()];
    const day = d.getDate();
    return `${month} ${day}`;
};

export const formatTimeCard = (timeStr) => {
    const formattedPattern = /^\d{1,2}:\d{2}\s?(AM|PM)$/i;
    if (formattedPattern.test(timeStr)) {
        return timeStr;
    }
    const date = new Date(timeStr);
    if (isNaN(date)) {return timeStr;}
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });
};

export const formatDateCard = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

export const formatDuration = (time) => {
    const totalMinutes = typeof time === 'number' ? time : parseInt(time, 10);
    if (isNaN(totalMinutes)) {return time;}

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    let formatted = '';
    if (hours > 0) {
        formatted += `${hours}h`;
    }
    if (minutes > 0) {
        formatted += ` ${minutes}m`;
    }
    return formatted.trim();
};

export const formatCalories = (calories) => {
    const num = Number(calories);
    if (isNaN(num)) {return calories;}
    return num.toLocaleString('ru-RU');
};

export const formatDurationInput = (input) => {
    const minutes = parseInt(input, 10);
    if (!isNaN(minutes)) {
        return `${minutes} min`;
    }
    return input;
};

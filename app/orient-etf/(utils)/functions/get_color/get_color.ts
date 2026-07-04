export const getColorClass = (val: number) => {
    if (val < -0.5) return 'text-red-500';
    if (val < -0.25) return 'text-orange-500';
    if (val < -0.125) return 'text-yellow-500';
    if (val < 0.125) return 'text-gray-500';
    if (val < 0.25) return 'text-lime-400';
    if (val < 0.5) return 'text-lime-600';
    return 'text-green-600';
};

export function getDotColor(val: number) {
    if (val < -0.5) return 'text-red-600';
    if (val < -0.25) return 'text-orange-500';
    if (val < -0.125) return 'text-yellow-600';
    if (val < 0.125) return 'text-gray-500';
    if (val < 0.25) return 'text-lime-600';
    if (val < 0.5) return 'text-green-500';
    return 'text-green-700';
}
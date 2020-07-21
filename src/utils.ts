/**
 * To shuffle array
 * @param  {any[]} array
 * @returns any
 */
export const shuffleArray = (array: any[]): any[] => [...array].sort(() => Math.random() - 0.5);

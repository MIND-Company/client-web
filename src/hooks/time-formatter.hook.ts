export const useTimeFormatter = (time: string | Date): string => {
  console.log(time);
  return new Date(time).toLocaleString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

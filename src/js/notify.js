import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error, info } from '@pnotify/core';
export function onNoCountry() {
    info({
      title: 'Внимание! Ошибка!',
      text: 'Введите пожалуйста корректный запрос ...(Ukraine)',
      delay: 5000,
      closerHover: true,
      mouseReset: true,
      shadow: true,
    });
  }
  
  export function onOutputInfo() {
    error({
      title: 'Внимание! Найдено слишком много совпадений',
      text: 'Введите пожалуйста более специфичный запрос.',
      delay: 5000,
      closerHover: true,
      mouseReset: true,
      shadow: true,
    });
  }
  export function onError() {
    alert('Внимание! Отсутствуют данные поиска!');
  }

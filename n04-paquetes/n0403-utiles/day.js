/*********
 * dayjs *
 *********/

const dayjs = require('dayjs');
// import dayjs from 'dayjs';

console.log(dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss'));

console.log(dayjs().startOf('month').add(1, 'day').set('year', 2018).format('DD-MM-YYYY HH:mm:ss'));

console.table(dayjs('2018-08-08')); // parse

console.log(dayjs().format('{YYYY} DD-MMTHH:mm:ss SSS [Z] A')); // display

console.log(dayjs().set('month', 3).month()); // get & set

console.table(dayjs().add(1, 'year')); // manipulate

console.log(dayjs().isBefore(dayjs())); // query

require('dayjs/locale/es');
dayjs.locale('es');

console.log(dayjs('15 Enero 2021', 'DD MMMM YYYY', 'es'));

console.log(dayjs.locale());

const AHORA = dayjs();
console.log(AHORA.toString());
console.log(AHORA.format('DD/MM/YYYY - HH:mm:ss'));

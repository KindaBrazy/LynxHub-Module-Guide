import {AUTOMATIC1111_ID, OOBABOOGA_ID} from './Constants';
import a1MainMethods from './Container/Automatic1111/MainMethods';
import oobaMainMethods from './Container/Oobabooga/MainMethods';
import {MainModules} from './types';

const mainModules: MainModules[] = [
  {id: AUTOMATIC1111_ID, methods: a1MainMethods},
  {id: OOBABOOGA_ID, methods: oobaMainMethods},
];

export default mainModules;

import {AUTOMATIC1111_ID, NEROGAR_ID, OOBABOOGA_ID} from './Constants';
import a1MainMethods from './Container/Automatic1111/MainMethods';
import nerogarMethods from './Container/Nerogar/MainMethods';
import oobaMainMethods from './Container/Oobabooga/MainMethods';
import {MainModules} from './types';

const mainModules: MainModules[] = [
  {id: AUTOMATIC1111_ID, methods: a1MainMethods},
  {id: OOBABOOGA_ID, methods: oobaMainMethods},
];

export function setCurrentBuild(build: number) {
  if (build > 11) {
    mainModules.push({id: NEROGAR_ID, methods: nerogarMethods});
  }
}

export default mainModules;

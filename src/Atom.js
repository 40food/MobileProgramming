import { atom } from 'recoil';

export const dateState = atom({
  key: 'date',
  default: 0,
});

export const diaryState = atom({
  key: 'diary',
  default: {},
});


export const deleteState = atom({
  key: 'delete',
  default: {},
})

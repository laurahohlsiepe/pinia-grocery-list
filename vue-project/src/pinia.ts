import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
    state: () => ({
        items: [] as itemsInfo[],
    }),
    actions: {
        addItem(item) {
            this.items.push(item);
    }
  }
});

interface itemsInfo {
    items: string
}

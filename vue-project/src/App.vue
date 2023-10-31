<template>
  <header>
    <h1>Pinia Einkaufsliste</h1>  
    <h2>Schreibe deine eigene Einkaufsliste </h2>
  </header>
  <body>

    <div class="flex-class"> 
      <div class="input-class">
        <input type="text" v-model="newItem" />
        <button type="button" class="send-button" @click="addItem">Add</button>
      </div>

     <div class="list-class">
       <ul>
         <li v-for="(item, index) in itemStore.items" :key="index">{{ item }}</li>
       </ul>
      </div>
    </div>
  
  </body>
</template>

<script setup>
import { ref } from 'vue';
import { useMyStore } from './pinia.ts';

const itemStore = useMyStore();
const newItem = ref('');

const addItem = () => {
  if (newItem.value.trim() !== '') {
    itemStore.addItem(newItem.value);
    newItem.value = '';
  }
};
</script>

<style scoped>

* {
    box-sizing: border-box;
} 

  body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  height: 100vh;
}

header {
 text-align: center;
}

.flex-class {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.input-class {
  display: flex;
  justify-content: start;
  padding: 2rem 4rem;
  width: 100%;
  height: 6rem;
}

.list-class {
  display: flex;
  justify-content: start;
  padding: 2rem 0;
  width: 100%;
}

.send-button {
    top:50%;
    background-color: pink;
    color: #fff;
    margin-left: 0.5rem;
    border:none;
    border-radius:10px;
    padding: 0rem 1rem
}
</style>

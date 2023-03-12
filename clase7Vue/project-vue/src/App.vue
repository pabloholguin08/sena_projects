<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
 import {ref,computed} from 'vue';
// const data ={
//   nombre:'Juan',
//   apellido: 'Holguin',
//   edad:18
// }
let dato = ref(0)
let arreglo = ref([])
const sumar = () => dato.value++
const restar = () => dato.value--
const restablecer = () => dato.value=0;

const buscar= computed(()=>{
  const datoEncontrado = arreglo.value.find(n=> n === dato.value)
  return datoEncontrado || datoEncontrado===0
});
const agregar=() =>{
    arreglo.value.push(dato.value);
}


</script>

<template>
  <!-- <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
  <h1 :class="dato >=0 ?'positivos':'negativos'">{{ dato }}</h1>
  <button @click="sumar">sumar</button>
  <button @click="restar">restar</button>
  <button @click="restablecer">restablecer</button>
  <button :disabled="buscar" @click="agregar">Agregar</button>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
  .negativos{
    color:red
  }
  .positivos{
    color:green
  }

</style>

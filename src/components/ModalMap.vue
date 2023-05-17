<template>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            {{ map.displayName }}
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </header>
  
        <section class="modal-body">
          <div class="img-map" v-bind:style="{ 'background-image': 'url(' + map.displayIcon + ')' }"> 
          </div>
        </section>
  
      </div>
    </div>
  </template>

<script>
export default {
  name: 'ModalCard',
  props : ["map"],
  emit: ["close"],
 
  methods: {
    close() {
      this.$emit('close');
    },
}
}

</script>

<style>

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

 

 
  .modal-body {
    position: relative;
    width: 100%;
    height: 80%;
  }

  .img-map{
    position : relative;
    width: 100%;
    height: 100% ;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }


  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: var(--red);
    background: transparent;
  }

@media screen and (min-width: 1024px){

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90%;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: var(--red);
    font-family: Valorant;
    font-size: 3em;
    justify-content: space-between;
  }

 
}

@media screen and (min-width: 767px) and (max-width:1023px){
  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70%;
  }


  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: var(--red);
    font-family: Valorant;
    font-size: 2.5em;
    justify-content: space-between;
  }


}
  
  @media screen and (max-width: 767px){

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 60%;
  }


  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: var(--red);
    font-family: Valorant;
    font-size: 2em;
    justify-content: space-between;
  }


  }

</style>
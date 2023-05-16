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

          <!-- <div v-for="callout in map.callouts" :key="callout.regionName" class="callout-marker" :style="getCalloutMarkerStyle(callout)">
          {{ callout.regionName }}
          </div> -->
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
      console.log("Closed")
      this.$emit('close');
    },
    getCalloutMarkerStyle(callout) {
      const posX = callout.location.x * this.map.xMultiplier + this.map.xScalarToAdd
      const posY = callout.location.y * this.map.yMultiplier + this.map.yScalarToAdd
      
      // const height = 500
      // const width = 800
      // const posX = callout.location.x/20 + 400
      // const posY = callout.location.y/20 + 500

      console.log("X : ", posX, "Y : ", posY)
      return {
        position: "absolute",
        left: `${posX}px`,
        top: `${posY}px`
       
      };
    
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

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: var(--red);
    font-family: Valorant;
    font-size: 3em;
    justify-content: space-between;
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

  .callout-marker {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 5px;
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

</style>
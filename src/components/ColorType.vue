<script>
export default {
  name: 'ColorType',
  data() {
    return {
      opened: false,
    };
  },
  methods: {

  },
  computed: {
    processingType: {
      get() {
        return this.$store.getters.getProcessingType;
      },
      set(newValue) {
        const data = {
          key: 'processingType',
          value: newValue
        };
        console.log(data)
        this.$store.commit('setProcessingType', data);
      }
    }
  }
}
</script>

<template>
  <ul class="f-color-type">
    <li class="f-color-type__item">
      <label class="f-color-type__element">
        <input class="f-color-type__input" type="radio" name="colorType" value="grinding"  v-model="this.processingType">
        <span>С шлифовкой</span>
      </label>
    </li>
    <li class="f-color-type__item">
      <label class="f-color-type__element">
        <input class="f-color-type__input" type="radio" name="colorType" value="polishing"  v-model="this.processingType">
        <span>С полировкой</span>
      </label>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.f-color-type {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__element {
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;

    span {
      color: #2E2E2E;
      font-size: 14px;
      font-weight: 400;
    }
  }

  &__input {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #DBDBDB;
    width: 15px;
    height: 15px;
    &::before {
      content: '';
      display: block;
      flex-shrink: 0;
      width: 7.5px;
      height: 7.5px;
      border-radius: 50%;
      background-color: #DBDBDB;
    }
    &:checked {
      border-color: $green;
      &::before {
        background-color: $green;
      }
    }
  }
}
</style>

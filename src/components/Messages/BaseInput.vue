<template>
  <div class="mb-3">
    <label :class="labelClasses"> {{ label }}</label>
    <input
      :placeholder="label"
      :class="inputClasses"
      :value="modelValue"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  emits: ["update"],
  props: {
    type: String,
    label: String,
    labelClasses: String,
    inputClasses: String,
    modelValue: [String, Number],
  },
  // components: { FormLabel, FormInput },
  defineAsyncComponent: {
    // FormInput,
    // FormLabel,
  },
  methods: {
    passInputValue(value) {
      emit("update:modelValue", value);
    },
  },
};
</script>

<style></style>

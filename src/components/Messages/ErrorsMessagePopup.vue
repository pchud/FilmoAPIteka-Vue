<template>
  <message-popup>
    <message-popup-header title="Lista błędów" />
    <message-popup-errors-body
      header="Lista błędów"
      :messages="messages.messages"
    />
    <message-popup-footer>
      <button class="btn btn-danger" @click="messages.confirm()">
        Potwierdź błędy
      </button>
      <button class="btn btn-primary" @click="togglePopup()">
        Zamknij popup
      </button>
    </message-popup-footer>
  </message-popup>
</template>

<script>
import MessagePopup from "./UI/MesssagePopup.vue";
import MessagePopupHeader from "./UI/MessagePopupHeader.vue";
import MessagePopupErrorsBody from "./UI/MessagePopupErrorsBody.vue";
import MessagePopupFooter from "./UI/MessagePopupFooter.vue";

export default {
  components: {
    MessagePopup,
    MessagePopupHeader,
    MessagePopupErrorsBody,
    MessagePopupFooter,
  },
  props: ["togglePopup", "messages"],
};
</script>

<style></style>

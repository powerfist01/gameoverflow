<template>
  <div>
    <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>

    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        </b-form-group>
      </div>
    </b-sidebar>
    <Button name='This is a Button'/>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components:{
    Button
  },
  data() {
    return {
      variant: "dark"
    };
  }
};
</script>

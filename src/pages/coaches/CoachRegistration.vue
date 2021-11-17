<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      //here we get the formData
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
      // it also pushes us to the coaches but we also cant go back to the form
    },
  },
};
</script>
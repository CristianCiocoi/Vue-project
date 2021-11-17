<template>
  <div>
    <!-- Details For Coach -->
    <!-- we need a router view for the child of coach detail to be rendered -->
    <!-- <router-link to="/coaches/c1/contact">Contact</router-link> -->
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interesat? Contacteaza acum!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>


<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  // this component will be loaded through routing
  // the router loads it and the router by default passes no props
  // therefore thereotically it would not get any props at all untill
  // by adding props: true
  // to the routing conffig
  // u can insure that tihs dynamic value
  // the concrete val for the url
  // is passed in as a prop
  // of that name ":id"
  // into CoachDetail component
  // so here the path was added with a dynamic value an /coach/:id
  // and by adding props: true the vue router will pass the value id as a prop to CoachDetail
  // thats why i expect here a props of id here
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
  },

  created() {
    // in created i wanna reach out for the coach with this prop id
    // and then set elected coach equal to that
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
  // and thats how to find a coach in our coaches list
};
</script>
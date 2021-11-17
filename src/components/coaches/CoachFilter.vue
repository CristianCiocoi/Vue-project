<template>
  <base-card>
    <h2>Gaseste-ti profesorul</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">FrontEnd</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  export: ['change-filter'],
  data() {
    return {
      filters: {
        // i want to manage which option the user chose
        frontend: true,
        backend: true,
        career: true,
        // this means as long as smth is true coaches
        // coaches that have that area of expertise should be shown
      },
    };
  },
  methods: {
    setFilter(event) {
      // this method should be bound to this checkboxes
      // for that we can listen to change event
      // and that is when the checkbox is changed
      // the setFilter should be triggered
      // it receives the default event obj
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updateFilters = {
        ...this.filters, //i copy this filters into this new obj
        [inputId]: isActive, //but then we override one of this new prop
      };
      this.filters = updateFilters;
      // i also need the component that uses this component know about my filters
      this.$emit('change-filter', updateFilters); //thats why i wanna emit a custom event to communicate back to the parent component
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
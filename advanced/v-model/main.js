const inputComp = {
  template: "#input-comp",
  props: ['value'],
  model: {
    prop: "value",
    event: "input"
  }
};

const checkbox = {
  template: "#checkbox",
  props: ['value'],
  model: {
    prop: "value",
    event: "change"
  }
};

const group = {
  template: "#group",
  props: ["items"],
  data() {
    return {
      inner: this.items
    }
  },
  model: {
    prop: "items",
    event: "itemsChanged"
  },
  methods: {
    expose() {
      this.$emit('itemsChanged', this.inner);
    }
  }
}

const radio = {
  template: "#radio",
  props: ['value'],
  model: {
    event: "change",
    prop: "value"
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.value);
    }
  }
}


const app = new Vue({
  el: "#root",
  template: "#root-template",
  components: { inputComp, checkbox, group, radio },
  data() {
    return {
      myText: "test",
      yesNo: true,
      group: ['red', 'blue'],
      radio: "visa"
    }
  }
});


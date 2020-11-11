const inputComp = {
  template: "#input-comp",
  props: ['value'],
  modal: {
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
  model: {
    prop: "items",
    event: "itemsChanged"
  },
  data() {
    return {
      inner: this.items
    }
  },
  methods: {
    expose() {
      this.$emit("itemsChanged", this.inner);
    }
  }
}

const radio = {
  template: "#radio",
  props: ["value"],
  model: {
    prop: "value",
    event: "change"
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value)
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
      group: ['green'],
      radio: "master"
    }
  }
});


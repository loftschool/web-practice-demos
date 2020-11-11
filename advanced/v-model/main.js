const inputComp = {
  template: "#input-comp"
};

const checkbox = {
  template: "#checkbox"
};

const group = {
  template: "#group"
}

const radio = {
  template: "#radio",
}

const app = new Vue({
  el: "#root",
  template: "#root-template",
  components: { inputComp, checkbox, group, radio },
  data() {
    return {
      myText: "test",
      yesNo: true,
      group: [],
      radio: "visa"
    }
  }
});


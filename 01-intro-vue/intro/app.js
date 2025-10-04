const { createApp, ref } = Vue;

const app = createApp({
  //   template: `
  //     <h1>{{ message }}  </h1>
  //     <p> - {{ author }} </p>
  //     `,
  setup() {
    const message = ref("Soy Batman");
    const author = ref("Bruce Wayne");

    // setTimeout(() => {
    //   message.value = "Soy Superman";
    //   author.value = "Clark Kent";
    // }, 1000);

    const changeQuote = () => {
      message.value = "Soy Superman";
      author.value = "Clark Kent";
    };

    return {
      author,
      message,
      changeQuote,
    };
  },
});

app.mount("#myApp");

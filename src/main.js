import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Janek Paeßens",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Automation", "Testing", "Fails", "Flaky Tests"],
    // Which CI/CD tools do you use in your project?
    tools: "Azure",
    // What do you want to learn in this workshop?
    expectations: ["What are the differences between different CI/CD Tools/platforms besides the platform itself?"],
  },
});

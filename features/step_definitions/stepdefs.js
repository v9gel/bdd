const assert = require("assert");
const { Given, When, Then } = require("cucumber");

var f = require("../../../");
import HelloWord from "../../src/components/HelloWord.vue";
function isItFriday(today) {
  return "Nope";
}

Given("today is Sunday", function() {
  this.today = "Sunday";
});

When("I ask whether it's Friday yet", function() {
  this.actualAnswer = HelloWord;
});

Then("I should be told {string}", function(expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});

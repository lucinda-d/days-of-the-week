var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

//console.log(weekday);

if (weekday === "Monday") {
  console.log("Lets get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky Work!");
} else if (weekday === "Wednesday") {
  console.log("Hump Day!");
} else if (weekday === "Thursday") {
  console.log("Working hard or hardly working?");
} else if (weekday === "Friday") {
  console.log("Weekend is almost heree!");
} else {
  console.log("WEEKEND YAAAY!");
}

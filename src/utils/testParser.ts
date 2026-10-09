import { parseZwillingQr } from "./parseZwillingQr";

console.log(
  parseZwillingQr(
    "https://cwa.app.link/food-storage?tc=42BO83&s=l&cc=17F9"
  )
);

console.log(
  parseZwillingQr(
    "zwilling://zwillingapp/food-storage/in/?tc=42PL24&s=s&cc=31ZD"
  )
);
const mailInforead = require("./mail-InfoRead");
const mailSender = require("./mailSender");

async function main() {
  const details = await mailInforead(); 
  await mailSender(details);           
}

main().catch(console.error);


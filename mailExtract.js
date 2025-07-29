function extractDetails(text) {
  const lines = text.split("\n");
  let name = "Not found";
  let email = "Not found";
  let phone = "Not found";

  for (let line of lines) {
    if (line.toLowerCase().startsWith("name")) {
      name = line.split(":")[1]?.trim() || "Not found";
    } else if (line.toLowerCase().startsWith("email")) {
      email = line.split(":")[1]?.trim() || "Not found";
    } else if (line.toLowerCase().startsWith("phone") || line.toLowerCase().startsWith("contact")) {
      phone = line.split(":")[1]?.trim() || "Not found";
    }
  }

  return { name, email, phone };
}

module.exports = extractDetails;

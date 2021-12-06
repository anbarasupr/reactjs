// Import dependencies
const fs = require("fs");
const YAML = require("js-yaml");

// Get YAML or throw exception on error
try {

    // Load the YAML
    const raw = fs.readFileSync("./yaml-to-json/dataTest.yaml");
    const data = YAML.safeLoad(raw);
	//const data = YAML.load(raw);

    // Show the YAML
    console.log(data);

    // Modify the YAML
    // data.customer.first_name = "Dorothy"; // Dorothy

    // Saved the YAML
    const yaml = YAML.safeDump(data);
    fs.writeFileSync("./yaml-to-json/dataTestOut.yaml", yaml, function (err, file) {
        if (err) throw err;
        console.log("Saved!");
    });
    fs.writeFileSync("./yaml-to-json/dataTestOut.json", JSON.stringify(data, null, 4), function (err, file) {
        if (err) throw err;
        console.log("Saved!");
    });

} catch (ex) {
    // Show error
    console.log(ex);
}
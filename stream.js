const fs = require("fs");
const path = require("path");

const read = fs.createReadStream(path.join(__dirname, "txtfile.txt"), "utf8");
const wr = fs.createWriteStream(path.join(__dirname, "anotherbigdata.txt"));

// read.forEach((chunksdata) => {
//   wr.write(chunksdata);
// });

read.pipe(wr);

import { program } from "commander";
import { generateRandomFile } from "murasaki-random-file-generator";
import { writeFileSync } from "fs";

program 
  .option("-d, --debug", "output extra debugging")
  .requiredOption("-mb, --size-in-megabytes <mb>")
  .requiredOption("-f, --file-type <fileType>")
  .requiredOption("-o, --output-file-path <path>")
  .parse(process.argv);

if (program.debug)
{
    console.log(program.opts());
}

console.log(`Generating ${program.sizeInMegabytes}MB file of type '${program.fileType}'`);

generateRandomFile({
    fileType: program.fileType,
    targetLengthMB: program.sizeInMegabytes
})
.then(buffer => {
    console.log(`Writing ${buffer.length} bytes to ${program.outputFilePath}`);

    writeFileSync(program.outputFilePath, buffer);
})
.finally(() => {
    console.log("Finished");
});
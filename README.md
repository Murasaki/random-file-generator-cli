# random-file-generator-cli

## Options

-d: Debug mode, optional

-mb or --size-in-megabytes: The size of the file to output

-f or --file-type: The required file type. Currently only PNG, JPEG and TIFF are supported.

-o or --output-file-path: The file path for the generated image.

## example usage:

### Generate a 2MB PNG file to the current directory. Output file name is "~2MB.png"

> generate-file -d -mb 2 -f "PNG" -o ./~2MB.png

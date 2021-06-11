/*12. byteSize

This snippet returns the length of a string in bytes.*/

const byteSize = str => new Blob([str]).size;

//byteSize('😀'); // 4
//byteSize('Hello World'); // 11

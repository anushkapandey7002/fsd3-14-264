import fs from 'fs/promises';

const writeData = async () => {
    try {
        console.log("about to write...");
        await fs.writeFile('stud.txt', 'Name: Anushka Pandey');
        console.log("File written successfully");
    } catch (error) {
        console.log(error);
    }
};

const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

const f3 = () => {
    console.log("f3");
};

const main = () => {
    console.log("main");

    setTimeout(f1, 0);
    setTimeout(f2, 0);

    setImmediate(f2);

    process.nextTick(f3);

    writeData();

    console.log("end");
};

main();

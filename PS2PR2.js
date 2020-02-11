/*

    A generator that is intialized with a sentence, and procedes to emit each word of the sentence in turn starting
    from the beginning of the sentence.
    Prints each word one per line

 */

function* Sentence (x = "All I know is something like a bird within her sang ") {
    let to_itr = x.split(' ');
    let len = to_itr.length;
    let i = 0;
    let result;
    while (i < len) {
        result = to_itr[i];
        i++;
        yield result;
    }

}

console.log("Testing Sentence generator, with no input since it is initialized with a value already:")
for (word of Sentence()){
    console.log(word)
}





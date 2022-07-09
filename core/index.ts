export function randomArrayNumber(length: number): Array<Number> {
    const result: number[] = [];
    for (let i = 0; i <= length; i++) {
        result.push(Math.random() * 100)
    } 
    return result;
}
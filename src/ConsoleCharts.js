/* It's a class that creates a chart in the console */
class ConsoleCharts {
    /**
     * @param data - The data to be used for the chart. Array of numbers or array of objects with a label and value property.
     */
    constructor(data){
        this.data = data || [];
	}

    /**
     * It takes an array of numbers or objects with a value property and returns a chart
     * @param [options] - An object that contains the following parameters:
     * @returns A string.
     */
    chart(options = { minHeight: false, pattern: false }){
        let chart = "\n";
        let lines = [];
        let descY = 0; /* It's a variable that will be used to store the length of the longest label. */
        for (let i = 0; i < this.data.length; i++) {
            if(typeof this.data[i] === "object"){
                if(descY < String(this.data[i].label).length){
                    descY = String(this.data[i].label).length;
                }
            }
            else{
                if(descY < String(this.data[i]).length){
                    descY = String(this.data[i]).length;
                }
            }
        }
        for (let i = 0; i < this.data.length; i++) {
            if(typeof this.data[i] === "object"){
                lines.push(this.#repeatCharacter(" ", descY - String(this.data[i].label).length) + this.data[i].label);
            }
            else{
                lines.push(this.#repeatCharacter(" ", descY - String(i + 1).length) + (i + 1));
            }
        }
        let max;
        let min;
        if(typeof this.data[0] === "object"){
            max = Math.max.apply(Math, this.data.map(function(o) { return o.value + String(o.value).length + 1; }));
            min = Math.min(...this.data.map(function(o){ return o.value; }));
            if(min > 1){
                min = min - 1;
            }
            else{
                options.minHeight = false;
            }
        }
        else{
            max = Math.max(...this.data);
            if(Math.min(...this.data) > 1){
                min = Math.min(...this.data) - 1;
            }
            else{
                min = Math.min(...this.data);
                options.minHeight = false;
            }
        }
        for (let i = 0; i < lines.length; i++) {
            if(typeof this.data[i] === "object"){
                lines[i] = lines[i] + " │" + (options.minHeight == true ? ("║") : "") + this.#repeatCharacter((options.pattern == true && i % 2 ? "▓" : "█"), (options.minHeight == true ? (this.data[i].value - min) : this.data[i].value)) + " " + this.data[i].value;
            }
            else{
                lines[i] = lines[i] + " │" + (options.minHeight == true ? ("║") : "") + this.#repeatCharacter((options.pattern == true && i % 2 ? "▓" : "█"), (options.minHeight == true ? (this.data[i] - min) : this.data[i])) + " " + this.data[i];
            }
            chart += lines[i] + "\n";
            if(i == lines.length - 1){
                chart += this.#repeatCharacter(" ", descY) + " └" + this.#repeatCharacter("─", (options.minHeight == true ? (max - min + 1) : max));
            }
        }
        return chart;
    }
    
    /**
     * It takes a character and a number, and returns a string of the character repeated the number of
     * times
     * @param c - The character to repeat
     * @param n - the number of times to repeat the character
     * @returns a string of the character c repeated n times.
     */
    #repeatCharacter(c, n){
        let a = "";
        for (let i = 0; i < n; i++){
            a += c;
        }
        return a;
    }
}

/* for NodeJS */
module.exports = ConsoleCharts;
class ConsoleCharts {
    constructor(data){
        this.data = data || [];
	}
    chart(options = { minHeight: false }){
        let chart = "\n";
        let lines = [];
        let descY = 0;
        for (let i = 0; i < this.data.length; i++) {
            if(descY < String(this.data[i]).length){
                descY = String(this.data[i]).length;
            }
        }
        for (let i = 0; i < this.data.length; i++) {
            lines.push(this.#repeatCharacter(" ", descY - String(this.data[i]).length) + this.data[i]);
        }
        let max = Math.max(...this.data);
        let min;
        if(Math.min(...this.data) > 1){
            min = Math.min(...this.data) - 1;
        }
        else{
            min = Math.min(...this.data);
            options.minHeight = false;
        }
        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i] + " │" + (options.minHeight == true ? ("║") : "") + this.#repeatCharacter("█", (options.minHeight == true ? (this.data[i] - min) : this.data[i]));
            chart += lines[i] + "\n";
            if(i == lines.length - 1){
                chart += this.#repeatCharacter(" ", descY) + " └" + this.#repeatCharacter("─", (options.minHeight == true ? (max - min + 1) : max));
            }
        }
        return chart;
    }
    #repeatCharacter(c, n){
        let a = "";
        for(let i = 0; i < n; i++){
            a += c;
        }
        return a;
    }
}

// Exporting the class ConsoleCharts to be used in other files as a commonjs module
/*
module.exports = ConsoleCharts;
*/

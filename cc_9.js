// U41684674
document.addEventListener("DOMContentLoaded", function() {
    // Data points
    const data = [10, 20, 30, 40, 50];

    // Select the container
    const container = d3.select("#container");

    // Create div elements for each data point
    container.selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "data-point")
        .text(d => d)
        .on("mouseover", function(event, d) {
            d3.select(this).style("background-color", "firebrick");
        })
        .on("mouseout", function(event, d) {
            d3.select(this).style("background-color", "steelblue");
        });
});

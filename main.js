function main(){

    

    var width = 960,
    height = 500;
    r = 250;

    var projection = d3.geoOrthographic()
    .scale(250)
    .translate([width / 2, height / 2])
    .clipAngle(90);

    var path = d3.geoPath()
    .projection(projection);

    var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id","globe");

    //add a circle outside to give an appearance of a sphere
    svg.append("circle")
        .attr("cx", width / 2).attr("cy", height / 2)
        .attr("r", 250)
        .style("fill", "none") //change the color
        .attr("stroke","black")
        .attr("stroke-width",1);


  


//update1 https://gist.githubusercontent.com/GordyD/49654901b07cb764c34f/raw/27eff6687f677c984a11f25977adaa4b9332a2a9/countries-and-states.json
//original https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json


    d3.json("https://gist.githubusercontent.com/GordyD/49654901b07cb764c34f/raw/27eff6687f677c984a11f25977adaa4b9332a2a9/countries-and-states.json", function(error, world){
        if (error) throw error;

        console.log(world);


        // var countries = topojson.feature(world,world.objects.countries1);
        var countries = topojson.feature(world,world.objects.countries).features;
        console.log(countries);




        svg
            // .selectAll(".countries")
            .selectAll("g")
            .data(countries)
            .enter()
            .append("path")
            .attr("class",function(d){

                //add the country name in class attribute so that later it can be retrieved
                return d.properties.name;
            })
            .attr("d",path)
            .attr("fill","#abcdef") //to show the land
            .attr("stroke","#000000") //to divide the countries
            
            .on("click",function(d){
                // console.log(this);
                var x = this.getAttribute("class"); //return the country name
                console.log(x)
                // alert(d3.select(this).class);
            })
            
        
        
         

    })



  
}





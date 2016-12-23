// project is to create a sketch using grids 
//first thing is I have to figure out a way to create dynamic divs.
//then align them to look like a grid using table or inline-block

$(document).ready(function Blankgrid() {
	
	GenGrid(10);
	PaintGrid();
	
});

function CustomGrid(){

	var $griddim=prompt('Insert a number between 7 and 12');
	clean();
	GenGrid($griddim);
	
	PaintGrid();
}

function clean()
{
	$('#grid').empty();
}
//Generate a grid. 

function GenGrid(dim) {

if( (dim >6) && (dim<=12)) { 
	
	for(var i=1;i<=dim;i++) {

		var $grow=$("<div class='rowblock'></div>");

	for(var j=1; j<=dim;j++) { var $gcell= $("<div class='rowblock'></div>");

									$grow.append($gcell);
		                             } 
                         
   
      $("#grid").append($grow);

var $dim=578/dim;
$('div.rowblock').height($dim).width($dim);
}
	
}


} //end function

//paint function
function PaintGrid() {

$('.rowblock').hover(function() { $(this).css("background","#7EC0EE")});
}

//reset grid
function ResetGrid()
{
	$('.rowblock').css("background","white");
}


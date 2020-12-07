$(function(){
	
	/* Morris Area Chart */
	
	window.mA = Morris.Area({
	    element: 'morrisArea',
	    data: [
	        { y: '2013', a: 60},
	        { y: '2014', a: 100},
	        { y: '2015', a: 120},
	        { y: '2016', a: 140},
	        { y: '2017', a: 140},
	        { y: '2018', a: 180},
	        { y: '2019', a: 260},
	    ],
	    xkey: 'y',
	    ykeys: ['a'],
	    labels: ['Number of Center'],
	    lineColors: ['#1b5a90'],
	    lineWidth: 2,
		
     	fillOpacity: 0.5,
	    gridTextSize: 10,
	    hideHover: 'auto',
	    resize: true,
		redraw: true
	});
	
	/* Morris Line Chart */
	
	window.mL = Morris.Line({
	    element: 'morrisLine',
	    data: [
	    	{ y: '2012', a: 20},
	    	{ y: '2013', a: 24},
	    	{ y: '2014', a: 40},
	        { y: '2015', a: 61},
	        { y: '2016', a: 56},
	        { y: '2017', a: 58},
	        { y: '2018', a: 61},
	        { y: '2019', a: 64},
	    ],
	    xkey: 'y',
	    ykeys: ['a'],
	    labels: ['Literacy Rate over year'],
	    lineColors: ['#1b5a90','#ff9d00'],
	    lineWidth: 1,
	    gridTextSize: 10,
	    hideHover: 'auto',
	    resize: true,
		redraw: true
	});
	$(window).on("resize", function(){
		mA.redraw();
		mL.redraw();
	});

});
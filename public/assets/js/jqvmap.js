$(function(e){
	'use strict'
  
	  //world map
	  if ($('#world-map-gdp').length ){
  
		  $('#world-map-gdp').vectorMap({
			  map: 'world_en',
			  backgroundColor: null,
			  color: '#6963ff',
			  hoverOpacity: 0.7,
			  selectedColor: '#556ee6',
			  enableZoom: false,
			  showTooltip: false,
			//   values: sample_data,
			  scaleColors: ['#556ee6', '#4801ff'],
			  normalizeFunction: 'polynomial'
		  });
  
	  }
  
  
	  jQuery('#usa_map').vectorMap({
		  map: 'usa_en',
		  backgroundColor: null,
		  color: '#6963ff',
		  enableZoom: false,
		  showTooltip: false,
		  selectedColor: null,
		  hoverColor: null,
		  colors: {
			  mo: '#2980b9',
			  fl: '#27ae60',
			  or: '#8e44ad'
		  },
		  onRegionClick: function(event, code, region){
			  event.preventDefault();
		  }
	  });
	  
	  jQuery('#german').vectorMap({
		  map: 'germany_en',
		  backgroundColor: null,
		  color: '#6963ff',
		  hoverOpacity: 0.7, 
		  selectedColor: '#556ee6',
		  enableZoom: false,
		  showTooltip: false
	  });
	  
	  jQuery('#russia').vectorMap({
			  map : 'russia_en',
			  backgroundColor: null,
			  color: '#6963ff',
			  hoverOpacity: 0.7,
			  selectedColor: '#556ee6',
			  enableZoom: false,
			  showTooltip: false,
			//   values: sample_data,
		  });
	  
  
  });
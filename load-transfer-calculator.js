
			function calculate(){ 
			
			// Set Inputs
			
				var FLWeightInput = document.getElementById("FLWeightInput").value;
			
				var FRWeightInput = document.getElementById("FRWeightInput").value;
				
				var RLWeightInput = document.getElementById("RLWeightInput").value;
				
				var RRWeightInput = document.getElementById("RRWeightInput").value;
				
				var wheelbase = document.getElementById("wheelbase").value;
				
				var frontTrackWidth = document.getElementById("frontTrackWidth").value;

				var rearTrackWidth = document.getElementById("rearTrackWidth").value;

				var cogHeight = document.getElementById("cogHeight").value;

				var accelerationForce = document.getElementById("accelerationForce").value;

				var direction = document.getElementById("direction").value;
				
			// Calculate & Display Outputs
				
				// Background Equations
				var leftSideWeight = +FLWeightInput + +RLWeightInput;
				
				var rightSideWeight = +FRWeightInput + +RRWeightInput;
				
				// Static Outputs
				var frontAxleWeight = +FLWeightInput + +FRWeightInput;
				
					document.getElementById("frontAxleWeight").innerHTML = Math.round(frontAxleWeight);

				var rearAxleWeight = +RLWeightInput + +RRWeightInput;
					
					document.getElementById("rearAxleWeight").innerHTML = Math.round(rearAxleWeight);
				
				var totalWeight = +frontAxleWeight + +rearAxleWeight;
				
					document.getElementById("totalWeight").innerHTML = Math.round(totalWeight);
					
				var frontWeightDistribution = (100 * (+frontAxleWeight / +totalWeight));
				
					document.getElementById("frontWeightDistribution").innerHTML = Math.round(frontWeightDistribution);
				
				// Dynamic Outputs
				function FLWeightOutput() {
					
					if (direction == "Acceleration") {
						
						var FLWeightOutput = +leftSideWeight - +RLWeightOutput();
						
					} else if (direction == "Braking"){
						
						var FLWeightOutput = (+FLWeightInput + ((+totalWeight * + +accelerationForce * +cogHeight) / +wheelbase));
						
					} else if (direction == "Left Turn"){
						
						var FLWeightOutput = +frontAxleWeight - +FRWeightOutput();
						
					} else if (direction == "Right Turn"){
						
						var FLWeightOutput = (+FLWeightInput + ((+totalWeight * + +accelerationForce * +cogHeight) / +frontTrackWidth));
						
					} else {
						
						var FLWeightOutput = FLWeightInput;
						
					}
					
					return Math.round(FLWeightOutput);
					
				}
				
					document.getElementById("FLWeightOutput").innerHTML = FLWeightOutput();
				
				function FRWeightOutput() {
					
					if (direction == "Acceleration") {
						
						var FRWeightOutput = +rightSideWeight - +RRWeightOutput();
						
					} else if (direction == "Braking"){
						
						var FRWeightOutput = (+FRWeightInput + ((+totalWeight * + +accelerationForce * +cogHeight) / +wheelbase));
						
					} else if (direction == "Left Turn"){
						
						var FRWeightOutput = (+FRWeightInput + ((+totalWeight * + +accelerationForce * +cogHeight) / +frontTrackWidth));
						
					} else if (direction == "Right Turn"){
						
						var FRWeightOutput = +frontAxleWeight - +FLWeightOutput();
						
					} else {
						
						var FRWeightOutput = FRWeightInput;
						
					}
					
					return Math.round(FRWeightOutput);
					
				}
				
					document.getElementById("FRWeightOutput").innerHTML = FRWeightOutput();
				
				function RLWeightOutput() {
					
					if (direction == "Acceleration") {
						
						var RLWeightOutput = (+RLWeightInput + ((+totalWeight * + +accelerationForce * +cogHeight) / +wheelbase));
						
					} else if (direction == "Braking"){
						
						var RLWeightOutput = +leftSideWeight - +FLWeightOutput();
						
					} else if (direction == "Left Turn"){
						
						var RLWeightOutput = +rearAxleWeight - +RRWeightOutput();
						
					} else if (direction == "Right Turn"){
						
						var RLWeightOutput = (+RLWeightInput + ((+totalWeight * + +accelerationForce * +cogHeight) / +rearTrackWidth));
						
					} else {
						
						var RLWeightOutput = RLWeightInput;
						
					}
					
					return Math.round(RLWeightOutput);
					
				}
				
					document.getElementById("RLWeightOutput").innerHTML = RLWeightOutput();
				
				function RRWeightOutput() {
					
					if (direction == "Acceleration") {
						
						var RRWeightOutput = (+RRWeightInput + ((+totalWeight * + +accelerationForce * +cogHeight) / +wheelbase));
						
					} else if (direction == "Braking"){
						
						var RRWeightOutput = +rightSideWeight - +FRWeightOutput();
						
					} else if (direction == "Left Turn"){
						
						var RRWeightOutput = (+RRWeightInput + ((+totalWeight * + +accelerationForce * +cogHeight) / +rearTrackWidth));
						
					} else if (direction == "Right Turn"){
						
						var RRWeightOutput = +rearAxleWeight - +RLWeightOutput();
						
					} else {
						
						var RRWeightOutput = RRWeightInput;
						
					}
					
					return Math.round(RRWeightOutput);
					
				}
				
					document.getElementById("RRWeightOutput").innerHTML = RRWeightOutput();
				
				// Car Image Outputs (Not currently in use. Need to find way to merge image and text so outputs display in the tyres)
					// document.getElementById("FL").innerHTML = FLWeightOutput();
					
					// document.getElementById("FR").innerHTML = FRWeightOutput();
					
					// document.getElementById("RL").innerHTML = RLWeightOutput();
					
					// document.getElementById("RR").innerHTML = RRWeightOutput();
				
			}
			
// ===== CITY INFORMATION DATABASE =====
// Includes best time to visit and emergency info
const cityInfo = {
    "Delhi": {
        bestTime: "October to March (Winter)",
        weather: "Winter: 5-25°C | Hot summers",
        police: "100",
        ambulance: "102"
    },
    "Mumbai": {
        bestTime: "November to February (Monsoon: June-September)",
        weather: "Tropical | Hot & Humid | Rainy Monsoons",
        police: "100",
        ambulance: "102"
    },
    "Bangalore": {
        bestTime: "Year-round | Best: September to May",
        weather: "Pleasant & Moderate Climate",
        police: "100",
        ambulance: "102"
    },
    "Hyderabad": {
        bestTime: "October to February",
        weather: "Winter: 12-28°C | Summers: 25-42°C",
        police: "100",
        ambulance: "102"
    },
    "Chennai": {
        bestTime: "November to February (Avoid October-November monsoon)",
        weather: "Tropical | Hot & Humid | Coastal",
        police: "100",
        ambulance: "102"
    },
    "Kolkata": {
        bestTime: "October to March",
        weather: "Winter: 9-26°C | Monsoon: June-September",
        police: "100",
        ambulance: "102"
    },
    "Pune": {
        bestTime: "October to March",
        weather: "Pleasant | Mild Winters",
        police: "100",
        ambulance: "102"
    },
    "Ahmedabad": {
        bestTime: "November to February",
        weather: "Winter: 8-28°C | Very Hot Summers",
        police: "100",
        ambulance: "102"
    },
    "Jaipur": {
        bestTime: "October to March",
        weather: "Desert Climate | Hot Summers",
        police: "100",
        ambulance: "102"
    },
    "Agra": {
        bestTime: "October to March",
        weather: "Winter: 3-24°C | Very Hot in Summer",
        police: "100",
        ambulance: "102"
    },
    "Goa": {
        bestTime: "November to March (Avoid June-September monsoon)",
        weather: "Tropical Beaches | Monsoon Rains",
        police: "100",
        ambulance: "102"
    },
    "Lucknow": {
        bestTime: "October to March",
        weather: "Winter: 5-24°C | Muggy Summers",
        police: "100",
        ambulance: "102"
    },
    "Chandigarh": {
        bestTime: "September to March",
        weather: "Cool Winters | Hot Summers",
        police: "100",
        ambulance: "102"
    },
    "Indore": {
        bestTime: "October to March",
        weather: "Pleasant | Moderate Temperature",
        police: "100",
        ambulance: "102"
    },
    "Surat": {
        bestTime: "November to February",
        weather: "Semi-arid | Hot Climate",
        police: "100",
        ambulance: "102"
    }
};

// ===== CITY COORDINATES IN INDIA (Latitude, Longitude) =====
// These are used to calculate actual distances between cities
const cityCoordinates = {
    "Delhi": { lat: 28.7041, lon: 77.1025 },
    "Mumbai": { lat: 19.0760, lon: 72.8777 },
    "Bangalore": { lat: 12.9716, lon: 77.5946 },
    "Hyderabad": { lat: 17.3850, lon: 78.4867 },
    "Chennai": { lat: 13.0827, lon: 80.2707 },
    "Kolkata": { lat: 22.5726, lon: 88.3639 },
    "Pune": { lat: 18.5204, lon: 73.8567 },
    "Ahmedabad": { lat: 23.0225, lon: 72.5714 },
    "Jaipur": { lat: 26.9124, lon: 75.7873 },
    "Agra": { lat: 27.1767, lon: 78.0081 },
    "Goa": { lat: 15.2993, lon: 73.8243 },
    "Lucknow": { lat: 26.8467, lon: 80.9462 },
    "Chandigarh": { lat: 30.7333, lon: 76.7794 },
    "Indore": { lat: 22.7196, lon: 75.8577 },
    "Surat": { lat: 21.1458, lon: 72.8336 }
};

// ===== FOOD & PETROL PUMP STOPS =====
// These are real stops along popular Indian routes
const restStopsDatabase = {
    "Delhi-Mumbai": {
        stops: ["Gurgaon", "Mathura", "Agra", "Gwalior", "Indore", "Ujjain", "Nashik"],
        petrolPumps: ["Okhla Border", "Mathura Highway", "Agra Highway", "Gwalior Highway", "Indore Main Road"]
    },
    "Mumbai-Delhi": {
        stops: ["Nashik", "Ujjain", "Indore", "Gwalior", "Agra", "Mathura", "Gurgaon"],
        petrolPumps: ["Nashik Highway", "Indore Main Road", "Gwalior Highway", "Agra Bypass", "Mathura Road"]
    },
    
    "Bangalore-Hyderabad": {
        stops: ["Tandur", "Kurnool", "Nandyal", "Dhone Junction"],
        petrolPumps: ["Tandur Highway", "Kurnool Expressway", "Nandyal Stop"]
    },
    "Hyderabad-Bangalore": {
        stops: ["Nandyal", "Kurnool", "Tandur"],
        petrolPumps: ["Nandyal Highway", "Kurnool Stop", "Tandur Junction"]
    },
    
    "Delhi-Jaipur": {
        stops: ["Gurgaon", "Manesar", "Behror", "Alwar"],
        petrolPumps: ["Gurgaon Expressway", "Manesar Highway", "Behror Main Road"]
    },
    "Jaipur-Delhi": {
        stops: ["Alwar", "Behror", "Manesar", "Gurgaon"],
        petrolPumps: ["Alwar Highway", "Behror Stop", "Manesar Junction"]
    },
    
    "Mumbai-Goa": {
        stops: ["Pune", "Satara", "Kolhapur", "Belgaum", "Belgaum Border"],
        petrolPumps: ["Pune Bypass", "Satara Highway", "Kolhapur Main Road"]
    },
    "Goa-Mumbai": {
        stops: ["Belgaum", "Kolhapur", "Satara", "Pune"],
        petrolPumps: ["Belgaum Highway", "Kolhapur Stop", "Satara Junction"]
    },
    
    "Chennai-Bangalore": {
        stops: ["Chikballapur", "Krishnagiri", "Ranipet"],
        petrolPumps: ["Tambaram Highway", "Krishnagiri Main Road"]
    },
    "Bangalore-Chennai": {
        stops: ["Ranipet", "Krishnagiri", "Chikballapur"],
        petrolPumps: ["Krishnagiri Highway", "Chikballapur Stop"]
    },
    
    "Delhi-Lucknow": {
        stops: ["Noida", "Hapur", "Meerut", "Bijnor", "Seohara", "Lucknow"],
        petrolPumps: ["Noida Expressway", "Meerut Highway", "Lucknow Road"]
    },
    "Lucknow-Delhi": {
        stops: ["Lucknow", "Seohara", "Bijnor", "Meerut", "Hapur", "Noida"],
        petrolPumps: ["Lucknow Highway", "Bijnor Stop", "Meerut Main Road"]
    }
};

// ===== FUNCTION: Calculate Distance Between Two Cities =====
// Using Haversine Formula to get accurate distance
function calculateDistance(city1, city2) {
    // Earth's radius in kilometers
    const EARTH_RADIUS = 6371;
    
    // Get coordinates of both cities
    const coord1 = cityCoordinates[city1];
    const coord2 = cityCoordinates[city2];
    
    // Convert latitude and longitude to radians
    const lat1 = coord1.lat * Math.PI / 180;
    const lat2 = coord2.lat * Math.PI / 180;
    const deltaLat = (coord2.lat - coord1.lat) * Math.PI / 180;
    const deltaLon = (coord2.lon - coord1.lon) * Math.PI / 180;
    
    // Apply Haversine formula
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = EARTH_RADIUS * c;
    
    // Return distance rounded to nearest whole number
    return Math.round(distance);
}

// ===== FUNCTION: Get Equipment List Based on Age & Distance =====
// Equipment changes based on traveler's age and journey length
function getEquipmentList(age, distance) {
    // Basic equipment everyone needs
    let equipment = [
        "Aadhar Card / Valid ID Proof",
        "Phone & Phone Charger",
        "Power Bank (10000mAh minimum)",
        "Water Bottle (1-2 liters)",
        "Sunscreen & Cap/Hat",
        "First Aid Kit",
        "Hand Sanitizer & Masks",
        "Snacks (Biscuits, Nuts, Dry Fruits)",
        "Medications (if any)",
        "Extra Clothes"
    ];
    
    // Special items for children (age < 12)
    if (age < 12) {
        equipment.push("Toys / Entertainment Games");
        equipment.push("Extra Clothes for Kids");
        equipment.push("Wet Wipes & Diapers (if needed)");
    }
    
    // Special items for elderly (age >= 60)
    if (age >= 60) {
        equipment.push("Blood Pressure Monitor");
        equipment.push("Comfortable Cushion");
        equipment.push("Compression Socks");
        equipment.push("Reading Glasses");
    }
    
    // Special items for long journeys (distance > 300 km)
    if (distance > 300) {
        equipment.push("Sleeping Pillow");
        equipment.push("Toiletries (Toothpaste, Soap, Shampoo)");
        equipment.push("Change of Clothes");
    }
    
    // Special items for very long journeys (distance > 600 km)
    if (distance > 600) {
        equipment.push("Motion Sickness Medicine");
        equipment.push("Digestive Tablets");
        equipment.push("Insect Repellent Spray");
        equipment.push("Pocket Umbrella");
    }
    
    return equipment;
}

// ===== FUNCTION: Get Safety Tips =====
// Based on travel mode and distance
function getSafetyTips(transportMode, distance) {
    let tips = [
        "Keep important documents in a safe place",
        "Inform someone about your travel plan",
        "Keep emergency contacts handy",
        "Carry first aid kit and medicines",
        "Check vehicle condition before travel",
        "Follow traffic rules strictly"
    ];
    
    if (transportMode === "car" || transportMode === "motorcycle") {
        tips.push("Get vehicle serviced before long trip");
        tips.push("Don't drive after sunset on highways");
        tips.push("Take breaks every 2-3 hours");
    }
    
    if (transportMode === "bus") {
        tips.push("Travel with recognized operators");
        tips.push("Keep valuables in sight");
    }
    
    if (transportMode === "flight") {
        tips.push("Arrive 2 hours before domestic flights");
        tips.push("Check luggage restrictions");
    }
    
    if (distance > 800) {
        tips.push("Carry water and light snacks");
        tips.push("Stay hydrated throughout journey");
        tips.push("Book accommodation in advance");
    }
    
    return tips;
}

// ===== FUNCTION: Get Emergency Contacts =====
// Indian emergency numbers and services
function getEmergencyContacts() {
    return [
        "🚨 Police Emergency: 100",
        "🏥 Ambulance/Medical: 102",
        "🔥 Fire Emergency: 101",
        "☎️ All-in-One Emergency: 112 (Dial 112 from any phone, even without network)",
        "🚗 Road Assistance: 1033",
        "👨‍⚖️ Women Helpline (24/7): 1090"
    ];
}

// ===== FUNCTION: Get Weather & Best Time Info =====
function getWeatherInfo(destinationCity) {
    const info = cityInfo[destinationCity];
    if (info) {
        return `<strong>Best Time:</strong> ${info.bestTime}<br><strong>Weather:</strong> ${info.weather}`;
    }
    return "Tropical climate with monsoon patterns. Check local weather before travel.";
}

// ===== FUNCTION: Get Stops for Route =====
function getStopsForRoute(startCity, destinationCity) {
    // Create route key (both directions)
    const route1 = `${startCity}-${destinationCity}`;
    const route2 = `${destinationCity}-${startCity}`;
    
    // Check if this route exists in our database
    if (restStopsDatabase[route1]) {
        return restStopsDatabase[route1];
    } else if (restStopsDatabase[route2]) {
        return restStopsDatabase[route2];
    } else {
        // If route not found, create generic stops
        return {
            stops: ["Rest Stop 1", "Rest Stop 2", "Rest Stop 3"],
            petrolPumps: ["Petrol Pump 1", "Petrol Pump 2"]
        };
    }
}

// ===== FUNCTION: Calculate Travel Time =====
function calculateTravelTime(distance, transportMode) {
    // Average speed in km/h for each transport mode
    let speed = 80; // Default speed
    
    if (transportMode === "car") speed = 80;        // Car: 80 km/h
    if (transportMode === "bus") speed = 60;        // Bus: 60 km/h
    if (transportMode === "train") speed = 90;      // Train: 90 km/h
    if (transportMode === "flight") speed = 800;    // Flight: 800 km/h
    if (transportMode === "motorcycle") speed = 70; // Motorcycle: 70 km/h
    
    // Calculate hours
    const hours = (distance / speed).toFixed(1);
    
    // Calculate days (if > 24 hours)
    const days = Math.ceil(hours / 24);
    
    // Return formatted time
    if (hours > 24) {
        return `${days} days (${hours} hours)`;
    } else {
        return `${hours} hours`;
    }
}

// ===== FUNCTION: Calculate Budget =====
// Calculate estimated cost in Indian Rupees
function calculateBudget(distance, budget, transportMode) {
    const breakdown = [];
    
    // Transport cost per km (in rupees)
    let transportCost = 0;
    
    if (transportMode === "car") 
        transportCost = distance * 15;        // ₹15/km for car
    else if (transportMode === "bus") 
        transportCost = distance * 2;         // ₹2/km for bus
    else if (transportMode === "train") 
        transportCost = distance * 1.5;       // ₹1.5/km for train
    else if (transportMode === "flight") 
        transportCost = distance * 3;         // ₹3/km for flight
    else if (transportMode === "motorcycle") 
        transportCost = distance * 12;        // ₹12/km for motorcycle
    
    // Calculate accommodation cost
    const hours = distance / 80;
    const nights = Math.ceil(hours / 24);
    const accommodationCost = nights > 0 ? nights * 1500 : 0; // ₹1500/night
    
    // Calculate food cost (₹200 per hour)
    const foodCost = hours * 200;
    
    // Miscellaneous (15% extra)
    const miscCost = (transportCost + accommodationCost + foodCost) * 0.15;
    
    // Create breakdown items
    breakdown.push(`Transport Cost: ₹${Math.round(transportCost)}`);
    if (accommodationCost > 0) {
        breakdown.push(`Accommodation (${nights} nights): ₹${Math.round(accommodationCost)}`);
    }
    breakdown.push(`Food & Meals: ₹${Math.round(foodCost)}`);
    breakdown.push(`Tolls & Misc: ₹${Math.round(miscCost)}`);
    
    // Total estimate
    const totalCost = transportCost + accommodationCost + foodCost + miscCost;
    breakdown.push(`---`);
    breakdown.push(`Total Estimate: ₹${Math.round(totalCost)}`);
    
    // Compare with user's budget
    if (budget < totalCost) {
        const shortfall = Math.round(totalCost - budget);
        breakdown.push(`⚠️ Need ₹${shortfall} more!`);
    } else {
        const remaining = Math.round(budget - totalCost);
        breakdown.push(`✓ Remaining: ₹${remaining}`);
    }
    
    return breakdown;
}

// ===== FUNCTION: Display Results =====
function displayResults(startCity, destinationCity, distance, travelTime, transportMode, equipment, stopsData, budgetBreakdown, safetyTips, emergencyContacts, weatherInfo) {
    // Update trip summary
    document.getElementById('routeInfo').textContent = `${startCity} → ${destinationCity}`;
    document.getElementById('distanceInfo').textContent = `${distance} km`;
    document.getElementById('timeInfo').textContent = travelTime;
    document.getElementById('transportInfo').textContent = transportMode.replace('motorcycle', 'Two-Wheeler');
    
    // Display equipment list
    const equipmentList = document.getElementById('equipmentList');
    equipmentList.innerHTML = '';
    equipment.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        equipmentList.appendChild(listItem);
    });
    
    // Display food stops and petrol pumps
    const stopsList = document.getElementById('stopsList');
    stopsList.innerHTML = '';
    
    // Add food stops
    stopsData.stops.forEach(stop => {
        const listItem = document.createElement('li');
        listItem.textContent = `Food Stop: ${stop}`;
        stopsList.appendChild(listItem);
    });
    
    // Add petrol pumps
    stopsData.petrolPumps.forEach(pump => {
        const listItem = document.createElement('li');
        listItem.textContent = `Petrol Pump: ${pump}`;
        stopsList.appendChild(listItem);
    });
    
    // Display budget breakdown
    const budgetList = document.getElementById('budgetBreakdown');
    budgetList.innerHTML = '';
    budgetBreakdown.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        budgetList.appendChild(listItem);
    });
    
    // Display weather and best time to visit
    const weatherElement = document.getElementById('weatherInfo');
    weatherElement.innerHTML = weatherInfo;
    
    // Display safety tips
    const safetyList = document.getElementById('safetyList');
    safetyList.innerHTML = '';
    safetyTips.forEach(tip => {
        const listItem = document.createElement('li');
        listItem.textContent = tip;
        safetyList.appendChild(listItem);
    });
    
    // Display emergency contacts
    const contactsList = document.getElementById('contactsList');
    contactsList.innerHTML = '';
    emergencyContacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent = contact;
        contactsList.appendChild(listItem);
    });
    
    // Show results section (remove Tailwind's hidden class and set display)
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.classList.remove('hidden');
    resultsSection.style.display = 'block';
    
    // Scroll to results with slight delay
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// ===== FORM SUBMISSION =====
// When user clicks "Plan My Trip" button
document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from reloading page
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Get all user inputs
    const age = parseInt(document.getElementById('age').value);
    const budget = parseInt(document.getElementById('budget').value);
    const startCity = document.getElementById('startLocation').value;
    const destinationCity = document.getElementById('destination').value;
    
    // Get transport mode from radio buttons
    const transportRadio = document.querySelector('input[name="transport"]:checked');
    const transportMode = transportRadio ? transportRadio.value : '';
    
    // Validate inputs
    if (!age || !startCity || !destinationCity || !transportMode) {
        alert('Please fill all required fields!');
        return;
    }
    
    if (startCity === destinationCity) {
        alert('Please select different starting location and destination!');
        return;
    }
    
    // Show loading state on button
    submitBtn.textContent = '✈️ Planning Your Trip...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    // Simulate processing time with setTimeout (0.6 seconds)
    setTimeout(() => {
        // Calculate everything
        const distance = calculateDistance(startCity, destinationCity);
        const equipment = getEquipmentList(age, distance);
        const stopsData = getStopsForRoute(startCity, destinationCity);
        const travelTime = calculateTravelTime(distance, transportMode);
        const budgetBreakdown = calculateBudget(distance, budget, transportMode);
        const safetyTips = getSafetyTips(transportMode, distance);
        const emergencyContacts = getEmergencyContacts();
        const weatherInfo = getWeatherInfo(destinationCity);
        
        // Show results to user
        displayResults(startCity, destinationCity, distance, travelTime, transportMode, equipment, stopsData, budgetBreakdown, safetyTips, emergencyContacts, weatherInfo);
        
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }, 600);
});

// ===== RESET FUNCTION =====
// Clear form and hide results with smooth animation
function resetForm() {
    const resultsSection = document.getElementById('resultsSection');
    
    // Add fade-out animation
    resultsSection.style.animation = 'fadeOut 0.4s ease-out';
    
    // Wait for animation to finish, then hide and reset
    setTimeout(() => {
        document.getElementById('travelForm').reset(); // Clear all inputs
        resultsSection.classList.add('hidden'); // Add Tailwind hidden class
        resultsSection.style.display = 'none'; // Also set display to none
        resultsSection.style.animation = 'none'; // Reset animation
        
        // Reset progress bar
        document.getElementById('progressBar').style.width = '0%';
        document.getElementById('progressPercent').textContent = '0% Complete';
    }, 400);
}

// ===== FADE OUT ANIMATION =====
// Add to CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);

// ===== INTERACTIVE RIPPLE EFFECT =====
// Add ripple animation when clicking buttons
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    });
}

// Apply ripple effect to all interactive buttons
document.querySelectorAll('.submit-btn, .reset-btn, .print-btn').forEach(btn => {
    addRippleEffect(btn);
});

// ===== SMOOTH HOVER EFFECTS FOR INTERACTIVE ELEMENTS =====
// Add subtle animations on hover for better UX
document.querySelectorAll('.summary-card, .info-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transitionDuration = '0.3s';
    });
});

// ===== PAGE LOAD ANIMATION =====
// Ensure all elements animate smoothly when page loads
window.addEventListener('load', function() {
    // Add a small delay to ensure animations are visible
    document.querySelectorAll('[class*="section"]').forEach(section => {
        section.style.opacity = '1';
    });
});

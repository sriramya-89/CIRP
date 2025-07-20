// This function initializes the Google Map
function initMap() {
    // Coordinates for the default map location
    const defaultLocation = { lat: -34.397, lng: 150.644 };
    
    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: defaultLocation
    });

    // Add a marker for the default location
    const marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: "Community Issue Location"
    });
}

// Handling form submission
document.getElementById("issueForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents the form from reloading the page
    
    const villageName = document.getElementById("villageName").value;
    const issueDescription = document.getElementById("issueDescription").value;
    const issueImage = document.getElementById("issueImage").files[0];
    
    // Basic validation
    if (!villageName || !issueDescription || !issueImage) {
        document.getElementById("reportingStatus").textContent = "All fields are required.";
        return;
    }

    // Displaying the status
    document.getElementById("reportingStatus").textContent = "Submitting your issue...";

    // Here you can add the code to handle the form submission,
    // like sending data to a server, uploading the image, etc.

    // After submission, show success
    document.getElementById("reportingStatus").textContent = "Issue submitted successfully!";
    
    // Reset the form (optional)
    document.getElementById("issueForm").reset();
});

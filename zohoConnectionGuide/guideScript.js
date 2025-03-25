
    <script>
        // Track current step
        let currentStep = 0;
        
        // Function to move to next step
        function nextStep(stepNumber) {
            // Hide current step
            document.getElementById(`step${currentStep}`).classList.remove('active');
            
            // Show new step
            document.getElementById(`step${stepNumber}`).classList.add('active');
            
            // Update current step
            currentStep = stepNumber;
            
            // Scroll to top of step
            document.getElementById(`step${stepNumber}`).scrollIntoView({behavior: 'smooth'});
        };
    </script>

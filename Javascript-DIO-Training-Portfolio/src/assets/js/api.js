async function fetchProfileData() {
    const response = await fetch(
        "https://raw.githubusercontent.com/kgton12/JavaScript-Developer-Training/refs/heads/master/Javascript-DIO-Training-Portfolio/src/assets/data/profile.json"
    );
    const data = await response.json();
    
    return data;
}

// Dax Dewey
// 5/15/2024
// Carpet Calculator

// Get Document
document.getElementById("btn").addEventListener("click", calculateArea);

function calculateArea() {
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("length").value);
    let carpetPrice = Number(document.getElementById("price").value);
    
    let area;
    let subtotal;

    if (width > 0 && height > 0) {
        area = width * height;
        subtotal = area * carpetPrice;
        const myOutput = `
        Room width: ${width.toFixed(2)} (ft.)<br>
        Room height: ${height.toFixed(2)} (ft.)<br>
        Room area: ${area.toFixed(2)} (sq. ft.)<br>
        Carpet subtotal: $${subtotal.toFixed(2)}`;
        document.getElementById("output").innerHTML = myOutput;
    } else {
        console.log("Invalid dimensions. Plase provide positive values.")
    }
}

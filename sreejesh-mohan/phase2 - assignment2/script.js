// Product variables
const productName = "Wireless Headphones";
const basePrice = 1200;
const discountPercent = 15;
const taxRate = 8;
const stockStatus = 'limited'; // 'in_stock', 'limited', or 'out_of_stock'

// calculateDiscountedPrice(price, discount) function
function calculateDiscountedPrice(price, discount) {
    return price - (price * (discount / 100));
}

// calculateTax(price, taxRate) function
function calculateTax(price, taxRate) {
    return price * (taxRate / 100);
}

// calculateFinalPrice(price, discount, taxRate) function
function calculateFinalPrice(price, discount, taxRate) {
    const discountedPrice = calculateDiscountedPrice(price, discount);
    const taxAmount = calculateTax(discountedPrice, taxRate);
    return discountedPrice + taxAmount; 
}

// isFreeShipping(finalPrice) function
function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return 'Free Shipping';
    } else {
        return 'Shipping: Rs.49';
    }
}

// getStockMessage(status) function
function getStockMessage(status) {
    switch (status) {
        case 'in_stock':
            return 'In Stock';
        case 'limited':
            return 'Limited Stock';
        case 'out_of_stock':
            return 'Out of Stock';
        default:
            return 'Unknown Status';
    }
}

// Call the functions
const discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
const taxAmount = calculateTax(discountedPrice, taxRate);
const finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
const shippingStatus = isFreeShipping(finalPrice);
const stockMessage = getStockMessage(stockStatus);

// Print full price summary
console.log("=== Price Summary ===");
console.log("Product Name: " + productName);
console.log("Base Price: Rs. " + basePrice);
console.log("Discount Applied: " + discountPercent + "%");
console.log("Discounted Price: Rs. " + discountedPrice);
console.log("Tax Rate: " + taxRate + "%");
console.log("Tax Amount: Rs. " + taxAmount);
console.log("Final Price: Rs. " + finalPrice);
console.log("Shipping: " + shippingStatus);
console.log("Stock Status: " + stockMessage);
console.log("=====================");

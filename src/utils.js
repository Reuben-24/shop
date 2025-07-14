function formatAsPrice(number) {
  if (typeof number !== "number" || isNaN(number)) {
    console.warn("non-numeric value given to formatAsPrice function: ", number);
    return null;
  }
  return `$${number.toFixed(2)}`;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


function isSearchMatch(searchTerm, name) {
  const escaped = searchTerm
    .trim()
    .split(/\s+/)
    .map(term => escapeRegExp(term));

  const regex = new RegExp(escaped.map(t => `(?=.*${t})`).join(''), 'i');
    
  return regex.test(name);
}

function sortProducts(productsArray, sortTerm) {
  const sortedProductsArray = [...productsArray];
  switch (sortTerm) {
    case "default":
      return sortedProductsArray;
    case "price-asc":
      return sortedProductsArray.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sortedProductsArray.sort((a, b) => b.price - a.price);
    case "newest":
      return sortedProductsArray.sort((a, b) => b.id - a.id);
    case "oldest":
      return sortedProductsArray.sort((a, b) => a.id - b.id);
    default:
      console.warn("Invalid input given to sortProducts function");
      return productsArray;
  }
}

export { formatAsPrice, isSearchMatch, sortProducts };